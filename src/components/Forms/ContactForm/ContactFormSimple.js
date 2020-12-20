import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactFormSimple() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <section className="section section-lg pt-lg-0 section-contact-us">
      <Container>
      <div className="justify-content-center mt--300 row">
        <div className="bg-gradient-secondary shadow card">
        <form
          className="p-lg-5 card-body"
          name="contactPage"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contactPage" />
        <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
        </p>

        <h4 className="display-3 mb-1 text-default">Want to Work with us?</h4>
        <p className="mt-0">Fill out the contact form with your enquiry and someone from our team will get in contact with you.</p>

        <div className="mb-5 form-group">
          <div className="input-group-alternative input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-user-run"></i>
              </span>
              <input className="form-control" type="text" name="name" placceholder="Full name" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group-alternative input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-email-83"></i>
              </span>
            </div>
            <input className="form-control" type="email" name="email" placeholder="Enter email..." onChange={handleChange} />
          </div>
        </div>

        <div className="mb-5 form-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="ni ni-button-power"></i>
            </span>
            <input className="form-control" placeholder="Phone number" type="tel" name="phone" onChange={handleChange} />
          </div>
        </div>

        <div className="mb-5 form-group">
          <label hidden>Your Role:
          <select name="role[]" multiple>
            <option value="homeowner">Homeowner</option>
            <option value="builder">Builder</option>
            <option value="contractor">Contractor</option>
          </select>
          </label>
        </div>

        <div className="mb-4 form-group">
            <textarea className="forn-control-alternative form-control" name="message"cols="80" name="message" placeholder="How can we help you today?" rows="4" onChange={handleChange} />
        </div>

          <div>
            <button className="btn btn-block btn-group-lg btn-darker btn-round"  type="submit">Send</button>
          </div>
        </form>
      </div>
      </div>
    </Container>
    </section>
  )
}
