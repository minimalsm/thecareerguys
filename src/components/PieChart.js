import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart({ name, soc, scotlandSalary }) {
  const [ walesSalary, setWalesSalary] = useState(0);
  const [ northernIrelandSalary, setNorthernIrelandSalary] = useState(0);
  const [ errorOnPayFetch, setErrorOnPayFetch ] = useState(false);


  const getMostRecentSalary = (data) => {
    const payDataByYear = data.series.sort((a, b) => b.year - a.year);
    const mostRecentWeeklyWage = payDataByYear[0].estpay;
    const mostRecentSalary = mostRecentWeeklyWage * 52;
    return mostRecentSalary;
  }

  useEffect(() => {
    fetch(`https://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}&filters=region%3A10`)
    .then(response => response.json()) 
    .then(data => setWalesSalary(getMostRecentSalary(data)))
    .catch(error => setErrorOnPayFetch(true))
  }, [])

  useEffect(() => {
    fetch(`https://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${soc}&filters=region%3A12`)
    .then(response => response.json())
    .then(data => setNorthernIrelandSalary(getMostRecentSalary(data)))
    .catch(error => setErrorOnPayFetch(true))
  }, [])

  console.log('s ', scotlandSalary);
  console.log('ni: ', northernIrelandSalary);
  console.log('w: ', walesSalary)


  //Return null if the data isn't sufficient to properly render a Pie chart
  if (errorOnPayFetch) return null
  
  return (
   <div>
      <Pie
      data={{
        labels: ['Wales', 'Scotland', 'Northern Ireland' ],
        datasets: [
          {
            label: 'Salary',
            backgroundColor: [
              '#37997E',
              '#3e95cd',
              '#E6933B'
            ],
            hoverBackgroundColor: [
         
            ],
            data: [(walesSalary), (scotlandSalary), (northernIrelandSalary)]
          }
        ]
      }}
      options={{
        title:{
          display:true,
          text:`Regional Pay Differences for ${name}`,
          fontSize:15
        },
        legend:{
          display:true,
          position:'bottom'
        }
      }}
    />
    </div>
  )
}
