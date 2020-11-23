import React, { useState, useEffect } from "react"
const TestPage = () => {
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=Software%20Developer`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData)
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars
  }, [])
  return (
    <section>
      <input></input>
      <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
    </section>
  )
}
export default TestPage