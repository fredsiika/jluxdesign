import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="section section-lg pt-lg-10 mt-200">
      <h1 className="text-center">My NewForm Section</h1>
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
    </section>
  )
}

export default ReactHookForm
