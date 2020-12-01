import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart() {
  const [ walesPayData, setWalesPayData] = useState(0);

  const [ scotlandPayData, setScotlandPayData] = useState(0);

  const [ northernIrelandPayData, setNorthernIrelandPayData] = useState(0);


  const soc = 2136;

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=2136&filters=region%3A10`)
    .then(response => response.json()) 
    .then(data => {
      const paySortedByYear = data.series.sort((a, b) => b.year - a.year);
      setWalesPayData(paySortedByYear[0].estpay) //Most recent year's salary
    })
  },[])
  
  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=2136&filters=region%3A11`)
    .then(response => response.json()) 
    .then(data => {
      const paySortedByYear = data.series.sort((a, b) => b.year - a.year);
      setScotlandPayData(paySortedByYear[0].estpay) //Most recent year's salary
    })
  },[])

  useEffect(() => {
    fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=2136&filters=region%3A12`)
    .then(response => response.json()) 
    .then(data => {
      const paySortedByYear = data.series.sort((a, b) => b.year - a.year);
      setNorthernIrelandPayData(paySortedByYear[0].estpay) //Most recent year's salary
    })
  },[])

  console.log('s ', scotlandPayData * 52);
  console.log('ni: ', northernIrelandPayData * 52);
  console.log('w: ', walesPayData * 52)

  return (
   <div>
      <Pie
      data={{
        labels: ['Wales', 'Scotland', 'Northern Ireland' ],
        datasets: [
          {
            label: 'Salary',
            backgroundColor: [
              '#e8c3b9',
              '#3e95cd',
            ],
            hoverBackgroundColor: [
            '#F5CEC4',
            '#419FD9',
            ],
            data: [(walesPayData * 52), (scotlandPayData * 52), (northernIrelandPayData * 52)]
          }
        ]
      }}
      options={{
        title:{
          display:true,
          text:'Regional Pay Differences',
          fontSize:15
        },
        legend:{
          display:false,
          position:'right'
        }
      }}
    />
    </div>
  )
}
