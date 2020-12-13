/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning as WarningIcon } from 'react-icons/ai'
import axios from 'axios'

// Custom Warning Label when data is not submitted correctly
const Warning = ({ errorType }) => (
  <span style={{ color: 'red' }}>
    <WarningIcon style={{ position: 'relative', top: '3.5' }} /> <small>Please enter a {errorType}</small>
  </span>
)

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  const onSubmit = (data, e) => { 
    axios({
      method: 'post',
      url: 'http://192.168.64.2/api/insertMessage.php',
      headers: { 'content-type': 'application/json' },
      data: data
    })
      .then(() => {
        e.target.reset()
        navigate('/submitted', { replace: true })
      })
      .catch((error) => {
        // Code snippet taken from axios error handling docs at (https://github.com/axios/axios#handling-errors)
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
  }
  
  // lines such as 
  //               {errors.name && <Warning ...
  // are only displayed when front end validation is triggered for that input
  return (
    <StyledContactForm>
      <h1>Contact Us</h1>   
      <form onSubmit={handleSubmit(onSubmit)} action="/">
        
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" ref={register({ required: true, minLength: 2})}></input>
        {errors.name && <Warning class="error" errorType={'valid name'} />}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" ref={register({ required: true, pattern: EMAIL_REGEX })}></input>
        {errors.email && <Warning class="error" errorType={'valid email'} />}
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" ref={register({ required: true })}></textarea>
        {errors.message && <Warning class="error" errorType={'message'} />}

        <button type="submit">Send Message</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm

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
    margin-top: 13px;
  }
  textarea {
    height: 25vh;
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
  .error {
    margin: 0;
    padding: 0;
    color: red;
  }
`