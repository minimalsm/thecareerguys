import React from 'react'
import styled from 'styled-components'
import { AiOutlineToTop as TopIcon } from 'react-icons/ai'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  border-top: 1px solid #bdbdbd;
  max-width: 1024px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;

  a {
    text-decoration: none;
    color: #000000CC;
  }

  p {
    margin: 1px;
    padding: 0;

    
    font-size: 15px;
  }

  div {
  }

  .contact {
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    p {
      border-bottom: 1px solid black;

      :hover {
        border-color: #448aff;
      }
    }

    a:hover {
      color: #448aff;
    }

    p {

    }
  }

  .address {
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;

    a {
      font-size: 15px;
      text-align: center;

      :hover {
        color: #448aff;
      }
    }
  }

  .links {
    display: flex;
    
    i {
      font-size: 30px;
      position: relative;
      top: 2px;
    }

    h2 {
    }

    
  }

  .top {
    display: flex;

    :hover {
      h2, a {
        color: #448aff;
      }
    }
  }

  .home {
    display: none;
    margin-right: 40px;
    
    a:hover {
        color: #448aff;
    }
  }

  @media screen and (max-width: 650px) {
      flex-direction: column-reverse;

      .home {
        display: block;
      }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className='address'>
        <a href="https://goo.gl/maps/swqYvDaGpcGv64QcA">
          40 St Vincent Crescent
          <br/>
          Glasgow
          <br/>
          G3 8LQ
          <br/>
          Scotlandd
        </a>
      </div>

      <div className='contact'>
        <p><a className='contact-item' href="tel:01411234567">0141 123 4567</a></p>
        <p><a className='contact-item' href="mailto:hello@thecareerguys.com">hello@thecareerguys.com</a></p>
      </div>

      <div className='links'>
        <div className='home'>
          <h2><Link to='/'>Home</Link></h2>
        </div>
        <div className='top'>
          <a href="#top"><i><TopIcon /></i></a>
          <a href="#top"><h2>Top</h2></a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
