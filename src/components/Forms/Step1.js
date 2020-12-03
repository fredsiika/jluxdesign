import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Col, Row } from 'reactstrap'

export const Step1 = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.alert(data);
  }

  return (
    <>
      <section className="section section-lg pt-lg-10 mt-200">
        <p className="text-center display-4 text-primary"><span role="img" aria-label="Memo Emoji">📝</span>Step 1</p>
        <Row>
          <Col className="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="fullname" name="fullname" placeholder="full name" ref={register} />
                {/* {errors.fullname && <span className="text-warning">Full name is required.</span>} */}
              <input type="password" name="password" placeholder="password"
                ref={register({
                  required: "This field is required.",
                  minLength: { value: 8, message: "Password must have 8 characters or more." },
                  maxLength: { value: 20, message: "Password must be less than 20 characters." }
                })} />
                {errors.password && <p className="text-warning">{errors.password.message}</p>}
              <input type="submit" />
            </form>

            <div className="btn-group">
              <Button color="darker" size="lg" block disabled>Back</Button>
              <Button color="darker" size="lg" block>Next</Button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Step1
