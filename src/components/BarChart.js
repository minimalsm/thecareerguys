import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const BarChart = ({name, salary}) => {
  return (
    <div>
      <HorizontalBar
        data={{
          labels: ['Scottish Average', `${name} in Scotland` ],
          datasets: [
            {
              label: 'Salary',
              backgroundColor: [
                '#7347CC',
                '#3e95cd',
              ],
              hoverBackgroundColor: [
        
              ],
              data: [31356, salary, 0]
            }
          ]
        }}
        options={{
          title:{
            display:true,
            text:`Salary: Average ${name} vs Scottish Average`,
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

export default BarChart
