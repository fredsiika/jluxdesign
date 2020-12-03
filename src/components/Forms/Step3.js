import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useData } from "../../DataContext";
import { MainContainer } from "./MainContainer";
import { FileInput } from "./FileInput";
import { BackButton, PrimaryButton } from "./PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "./Form";
import PageAnalytics from './PageAnalytics'
import JumbotronFluid from '../Jumbotrons/JumbotronFluid'
import { Button, Container, Col, Label, Row } from 'reactstrap'

export const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <>
    <JumbotronFluid />
      <Container>
        <h3 className="text-center display-3 text-primary">
          <span className="text-left d-sm-inline" role="img" aria-label="Canera Emoji">
            📷
          </span>{' '}
          Step 3 - Upload Photos
        </h3>
        <p className="display-4">
          Add 2-4 pictures from different angles.{' '}
          Up to 5 images, max 5 MB each.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FileInput name="files" control={control} />
          <div className="additional-info">
            <p className="lead">
              Please provide any additional info to help provide a quote and enter all sizes of tops needed.
            </p>
            <textarea className="" placeholder="i.e. I'd like to get some help selecting the right marble materials.">

            </textarea>
          </div>
          <hr />
          <div className="pb-6">
            <Row>
              <Col sm="6">
                <Button href="/quote/step2" color="darker" block>Back</Button>
              </Col>
              <Col sm="6">
                <Button color="primary" onClick={handleSubmit(onSubmit)} block>Next</Button>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md="6" className="pr-1">
              <div className="good-example mt-5">
                <p className="text-success lead">Good Example</p>
                <img src='https://heyremodelers.com/demo/countertops/wp-content/uploads/2020/04/good.jpg'></img>
              </div>
            </Col>
            <Col md="6">
              <div className="good-example mt-5">
                <p className="text-warning lead">Bad Example</p>
                <img src='https://heyremodelers.com/demo/countertops/wp-content/uploads/2020/04/bad.jpg'></img>
              </div>
            </Col>
            <div className="photo-tips mt-5">
              <Label className="lead">Tip</Label>
              <p className="lead text-default">Use the good and bad photos as a guideline for the most accurate estimate. Good photos should have clear shots of your counter area and relative size references to cabinets and/or appliances.</p>
            </div>
          </Row>
          <hr />

        </Form>
      </Container>
    </>
  );
};

export default Step3