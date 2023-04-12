import React, { useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const careerFormHandler = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const subject = subjectRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log(firstName, lastName, subject, email, message);
  };

  return (
    <div className="fcf-body">
      <div id="fcf-form">
        <h3 className="fcf-h3">Send Us Meassage</h3>

        <form
          id="fcf-form-id"
          className="fcf-form-class"
          method="post"
          // action=""
          onSubmit={careerFormHandler}
        >
          <div className="name-section">
            <div className="fcf-form-group name-first-last">
              <label for="First Name" className="fcf-label">
                First Name
              </label>
              <div className="fcf-input-group ">
                <input
                  type="text"
                  ref={firstNameRef}
                  id={Math.random()}
                  name="first_name"
                  className="fcf-form-control"
                  required
                />
              </div>
            </div>

            <div className="fcf-form-group name-first-last">
              <label for="Last Name" className="fcf-label">
                Last Name
              </label>
              <div className="fcf-input-group ">
                <input
                  type="text"
                  ref={lastNameRef}
                  id={Math.random()}
                  name="last_name"
                  className="fcf-form-control"
                  required
                />
              </div>
            </div>
          </div>

          <div className="fcf-form-group">
            <label for="Email" className="fcf-label">
              Your email address
            </label>
            <div className="fcf-input-group">
              <input
                type="email"
                ref={emailRef}
                id={Math.round()}
                name="Email"
                className="fcf-form-control"
                required
              />
            </div>
          </div>

          <div className="fcf-form-group">
            <label for="text" className="fcf-label">
              Subject
            </label>
            <div className="fcf-input-group">
              <input
                type="tel"
                ref={subjectRef}
                id={Math.round()}
                name="Subject"
                className="fcf-form-control"
                required
              />
            </div>
          </div>

          <div className="fcf-form-group">
            <label for="Message" className="fcf-label">
              Your message
            </label>
            <div className="fcf-input-group">
              <textarea
                id={Math.round()}
                ref={messageRef}
                name="Message"
                className="fcf-form-control"
                rows="6"
                maxlength="3000"
                required
              ></textarea>
            </div>
          </div>

          <div className="fcf-form-group">
            <button
              type="submit"
              id="fcf-button"
              className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
