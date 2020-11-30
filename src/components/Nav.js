import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  padding-bottom: 2px;
  flex: 1;

  border-bottom: 1px solid #CFD8DC;
 
  .logo-wrapper {
    flex: 1;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 5px;
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
    margin-bottom: 15px;
  }

  a {
    color: #212121;
    text-decoration: none;

    margin-right: 0.75rem;

    padding: 0.5rem 0.55vw;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  a:hover {
    color: #448aff;
  }

  ul a[aria-current="page"] { 
    color: #448aff;
    border-bottom: 2.5px solid #448aff;
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


const Nav = () => {
  return (
    <StyledNav>
      <div class='logo-wrapper'>
        <h2 class='logo'><Link to='/'>TheCareerGuys</Link></h2>
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

export default Nav
