<p align="center">
    <img alt="Gatsby" src="./src/images/joshua-douglas.png" width="60" />
</p>
<h1 align="center">
  TheCareerGuys by Joshua Douglas
</h1>

## 🚀 Built with

* GatsbyJS for build process and speed
* ReactJS for components, state-management and code structure
* StyledComponents for styling
* GraphQL for fetching images from CDN
* PHP for saving contact forms to the backend


## 🤷🏻‍ How to run it locally

In your terminal

    $ cd thecareerguys
    $ npm install
    $ npm install -g gatsby-cli
    $ gatsby develop

Then navigate to localhost:8000 in the browser


## 🧐 Structure?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    thecareerguys/src
    ├── components
    ├── data
    ├── images
    ├── pages
    ├── styles

1.  **`/components`**: Each major page of the website has it's own components folder. In the folder any components dedicated solely to that page will be included. Any shared components will be in their appropriate folder.

2.  **`/data`**: This contains a local copy of the JSON for the universities API. This is only used on the deployed version of the website as the request fails when trying to make a HTTP request from a secure site.

3.  **`images`**: All images and logos used in the project.

4.  **`pages`**: At build time these pages will be converted to the html pages that make up the website.

5.  **`styles`**: This is only used for some global styling. However, the majority of the styling is done through custom styled components.

## 🤓 Notes

### Database 

As discussed with Jacob, the backend and frontend are seperated for the application. This is due to opionated Gatsby routing.
I have Gatsby running on localhost:8000 and the db/php running on an XAMPP server. The deployed version of the site does **not** submit to any database so although I do have it working locally the contact form is not working on the link provided below. I have attached a working example of this on localhost. 


<div align="center">
  <img alt="contactform" src="./README_images/contact-form-example.gif" width="80%" />
  <img alt="database" src="./README_images/database-success.png" width="80%" />
</div>

### Gatsby Routing

Also discussed with Jacob, sometimes (usually just after running the local server) Gatsby Link components will not work on first attempt but do work on refresh. **This is not an error**. This is due to the Gatsby build process and how it optimises links in production.

<div align="center">
  <img alt="database" src="./README_images/links-issue.gif" width="80%" />
</div>

### Original Design (Figma View)

<div align="center">
  <img alt="design" src="./README_images/design.png" width="80%" />
</div>

### Final Development (Browser View)

<div align="center">
  <img alt="design" src="./README_images/development.png" width="80%" />
</div>





## 💫 Live

[Check out the live version of the site here](https://confident-neumann-ba5b52.netlify.app/).

- Please note that contact form will not work as the backend server is not live!