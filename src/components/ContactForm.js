import React from 'react'
import styled from 'styled-components'

const StyledContactForm = styled.div`
  flex: 1 1 50%;

  form {
    display: flex;
    flex-direction: column;
  }

  form input, form textarea {
    margin: 10px 0px;
  }

  textarea {
    height: 25vh;
  }

  button {
    margin-top: 15px;
  }

`

const ContactForm = () => {
  return (
    <StyledContactForm>
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="text"></input>

        <label>Message</label>
        <textarea></textarea>
        <button type="submit">Send Message</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm
