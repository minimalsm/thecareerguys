import React from 'react'
import { Bar } from 'react-chartjs-2'

const state = {
  labels: ['UK Average', 'This Job' ],
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
      data: [25000, 50000, 0]
    }
  ]
}

export default function BarChart() {
  return (
   <div>
      <p>Bar chart here</p>

      <Bar
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Salary',
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
