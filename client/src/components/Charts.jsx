import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { lineChartSeries, lineChartOptions } from '../charts'


const Charts = ({ accountData, chartType }) => {

  const [pieData, setPieData] = useState({})


  const getPieData = () => {
    let pieData = {}
    const totalOps = accountData.length
    const paymentChannels = [... new Set(accountData.map(op => op.CircuitoPagamento))]
    paymentChannels.forEach(type => {
      const numOps = accountData.filter(op => op.CircuitoPagamento === type)
      pieData = { ...pieData, [type]: +(numOps.length * 100 / totalOps).toFixed(2) }
    })
    return pieData
  }

  const pieChartSeries = Object.values(pieData) || null

  const pieChartOptions = {
    labels: Object.keys(pieData) || null,
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }


  useEffect(() => setPieData(getPieData()), [accountData])


  if (chartType == "line") return (
    <div className='chartsWrapper'>
      <ReactApexChart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
    </div>
  )

  if (chartType == "pie") return (
    <div className='chartsWrapper'>
      <p className='chartsName'>
        PAYMENT CHANNELS
      </p>
      <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="donut" />
    </div>
  )
}

export default Charts