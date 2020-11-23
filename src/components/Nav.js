import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  flex: 1;

  border-bottom: 1px solid #212121;
 
  .logo-wrapper {
    flex: 1;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 0px;
  }
  
  .nav-wrapper {
    flex: 1;

    display: flex;
    justify-content: flex;
    align-items: flex-start;
    /* border: 2px solid goldenrod; */
  }

  ul {
    display: flex;
    flex: 1;
    /* border: 4px solid mistyrose; */
    margin-bottom: 0px;
  }

  a {
    color: #212121;
    text-decoration: none;

    margin-right: 0.75rem;

    padding: 0.5rem 0.55vw;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1000px) {
    .nav-wrapper {
      flex: 1;
    }
  }

  @media only screen and (max-width: 650px) {
    .logo-wrapper {
      display: none;
    }

    .nav-wrapper {
      justify-content: center;
    }   

    ul {
      margin-left: 0;
      justify-content: space-around;
    }
    
    a {
    }
  }

`


export default function Nav() {
  return (
    <StyledNav>
      <div class='logo-wrapper'>
        <h2 class='logo'>TheCareerGuys</h2>
      </div>
      <div class="nav-wrapper">
        <ul>
          <Link to='/careers'>Careers</Link>
          <Link to='/education'>Education</Link>
          <Link to='/funding'>Funding</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </div>
    </StyledNav>
  )
}
