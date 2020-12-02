import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning as WarningIcon } from 'react-icons/ai'

const StyledContactForm = styled.div`
  flex: 1 1 50%;

  form {
    display: flex;
    flex-direction: column;
  }

  form input, form textarea {
    margin: 5px 0px 0px 0px;
  }

  label {
    margin-top: 15px;
  }

  textarea {
    height: 25vh;
  }

  button {
    margin-top: 15px;
  }

  .error {
    margin: 0;
    padding: 0;
    color: red;
  }

  button {
    display: block;
    padding: 8px;
    border: 1px solid black;
    border-right-width: 4px;
    border-bottom-width: 4px;
    border-radius: 1px;
    width: 100%;
    margin: auto;
    margin-top: 15px;

    font-family: 'Raleway';
    font-weight: 700;
    text-decoration: none;
    background-color: #094EC3;
    color: #fff;
    text-align: center;

  :hover {
      background-color: #0A5FCF;
    }
  }  

`

const Warning = ({ errorType }) => (
  <span style={{ color: `red` }}>
    <WarningIcon style={{ position: 'relative', top: `3.5` }} /> <small>Please enter a {errorType}</small>
  </span>
)

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const onSubmit = data => console.log(data);

  return (
    <StyledContactForm>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" ref={register({ required: true, minLength: 2})}></input>
        {errors.name && <Warning class="error" errorType={"valid name"} />}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" ref={register({ required: true, pattern: EMAIL_REGEX })}></input>
        {errors.email && <Warning class="error" errorType={"valid email"} />}


        <label htmlfor="message">Message</label>
        <textarea id="message" name="message" ref={register({ required: true })}></textarea>
        {errors.message && <Warning class="error" errorType={"message"} />}

        <button type="submit">Send Message</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm
