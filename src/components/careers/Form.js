import React, { useRef } from "react";
import "./Form.css";

const Form = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const messageRef = useRef();

  const careerFormHandler = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const number = numberRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log(firstName, lastName, number, email, message);
  };

  return (
    <div class="fcf-body">
      <div id="fcf-form">
        <h3 class="fcf-h3">Contact us</h3>

        <form
          id="fcf-form-id"
          class="fcf-form-class"
          method="post"
          // action=""
          onSubmit={careerFormHandler}
        >
          <div className="name-section">
            <div class="fcf-form-group name-first-last">
              <label for="First Name" class="fcf-label">
                First Name
              </label>
              <div class="fcf-input-group ">
                <input
                  type="text"
                  ref={firstNameRef}
                  id={Math.random()}
                  name="first_name"
                  class="fcf-form-control"
                  required
                />
              </div>
            </div>

            <div class="fcf-form-group name-first-last">
              <label for="Last Name" class="fcf-label">
                Last Name
              </label>
              <div class="fcf-input-group ">
                <input
                  type="text"
                  ref={lastNameRef}
                  id={Math.random()}
                  name="last_name"
                  class="fcf-form-control"
                  required
                />
              </div>
            </div>
          </div>

          <div class="fcf-form-group">
            <label for="Number" class="fcf-label">
              Contact Number
            </label>
            <div class="fcf-input-group">
              <input
                type="tel"
                ref={numberRef}
                id={Math.round()}
                name="MobileNumber"
                class="fcf-form-control"
                required
              />
            </div>
          </div>

          <div class="fcf-form-group">
            <label for="Email" class="fcf-label">
              Your email address
            </label>
            <div class="fcf-input-group">
              <input
                type="email"
                ref={emailRef}
                id={Math.round()}
                name="Email"
                class="fcf-form-control"
                required
              />
            </div>
          </div>

          <div class="fcf-form-group">
            <label for="Message" class="fcf-label">
              Your message
            </label>
            <div class="fcf-input-group">
              <textarea
                id={Math.round()}
                ref={messageRef}
                name="Message"
                class="fcf-form-control"
                rows="6"
                maxlength="3000"
                required
              ></textarea>
            </div>
          </div>

          <div class="fcf-form-group">
            <button
              type="submit"
              id="fcf-button"
              class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
