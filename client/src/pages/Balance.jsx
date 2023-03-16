import AccountCard from '../components/AccountCard'
import Specs from '../components/Specs'
import Charts from '../components/Charts'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Balance = () => {

  const [data, setData] = useState([])
  const [accountNos, setAccountNos] = useState([])
  const [accountData, setAccountData] = useState([])


  const filterOps = (account) => {
    const selectedAccountData = data.filter(op => op.Conto === account)
    setAccountData(selectedAccountData)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/account/retrieve')
        setData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => setAccountNos([... new Set(data.map(op => op.Conto))]), [data])

  useEffect(() => setAccountData(data.filter(op => op.Conto === accountNos[0])), [accountNos])


  return (
    <div className='balanceContainer'>
      <div className="balanceWrapper">
        <p className="balanceTitle">YOUR BALANCE</p>
        <div className="accountCardContainer">
          {
            accountNos.map(account => {
              return <AccountCard key={account} account={account} accountData={data.filter(op => op.Conto === account)} filterOps={filterOps} />
            })
          }
        </div>
        <div className="specsContainer">
          <Specs accountData={accountData} />
        </div>
        <div className="ChartsContainer">
          <Charts accountData={accountData} />
        </div>
      </div>
    </div>
  )
}

export default Balance