import React from "react";

function Contact() {
  return (
    <div>
      <h3
        className="text-black border-bottom border-2 py-2 mb-3"
        id="contact-me"
      >
        Contact
      </h3>

      <h5>If you would like to get in contact with me:</h5>
      <br></br>
      <form className="was-validated mb-3">
        <div className="form-group mb-2">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          ></input>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group mb-2">
          <label for="emailFormControlInput">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailFormControlInput"
            placeholder="youremail@domain.com"
            required
          ></input>
          <div class="invalid-feedback">
            Please fill out this field and use a valid email.
          </div>
        </div>

        <div className="form-group mb-2">
          <label for="messageFormControlTextarea">Message</label>
          <textarea
            className="form-control"
            id="messageFormControlTextarea"
            rows="6"
            required
          ></textarea>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <br></br>
        <button type="submit" className="btn bg-yellow-green text-light">
          Submit
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contact;
