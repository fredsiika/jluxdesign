import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "../../DataContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { BackButton, PrimaryButton } from "./PrimaryButton";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import PageAnalytics from './PageAnalytics'
// import BackButton from './BackButton'

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if(!phoneNumber){
    return value
  }

  return (
    phoneNumber.formatInternational()
  );
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        💠 Step 2: Select the Shape
      </Typography>
      <p className="lead">Next, you will select the shape of your new countertop.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />

        <FormControlLabel
          control={
            <Checkbox defaultValue={data.hasPhone} defaultChecked={data.hasPhone} color="primary" inputRef={register} name="hasPhone" />
          }
          label="Do you have a phone"
        />

        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton src="/step3">Next</PrimaryButton>
        <BackButton>Back</BackButton>

        <PageAnalytics />
      </Form>
    </MainContainer>


  );
};

export default Step2