import AccountCard from '../components/AccountCard'
import Specs from '../components/Specs'
import Charts from '../components/Charts'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Balance = () => {

  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/account/retrieve')
        console.log(res.data)
        setData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='balanceContainer'>
      <div className="balanceWrapper">
        <p className="balanceTitle">YOUR BALANCE</p>
        <div className="accountCardContainer">
          <AccountCard />
          <AccountCard />
        </div>
        <div className="specsContainer">
          <Specs />
        </div>
        <div className="ChartsContainer">
          <Charts />
          <Charts />
        </div>
      </div>
    </div>
  )
}

export default Balance