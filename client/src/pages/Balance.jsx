import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import AccountCard from '../components/AccountCard'
import Specs from '../components/Specs'
import Charts from '../components/Charts'


const Balance = () => {

  const { data, fetchData } = useGlobalContext()
  const [accountsInStatement, setAccountsInStatement] = useState([])
  const [accountData, setAccountData] = useState([])
  const [selectedAccount, setSelectedAccount] = useState(null)


  const handleClick = (account) => {
    const selectedAccountData = data.filter(op => op.Conto === account)
    setAccountData(selectedAccountData)
    setSelectedAccount(account)
  }


  useEffect(() => { fetchData() }, [])

  useEffect(() => setAccountsInStatement([... new Set(data.map(op => op.Conto))]), [data])

  useEffect(() => {
    setAccountData(data.filter(op => op.Conto === accountsInStatement[0]))
    setSelectedAccount(accountsInStatement[0])
  }, [accountsInStatement])


  return (
    <div className='balanceContainer'>
      <div className="balanceWrapper">
        <p className="balanceTitle">YOUR BALANCE</p>
        <div className="accountCardContainer">
          {
            accountsInStatement.map(account => {
              return (
                <AccountCard
                  key={account}
                  account={account}
                  accountData={data.filter(op => op.Conto === account)}
                  handleClick={handleClick}
                  selectedAccount={selectedAccount}
                />
              )
            })
          }
        </div>
        <div className="specsContainer">
          <Specs accountData={accountData} />
        </div>
        <div className="ChartsContainer">
          <Charts accountData={accountData} chartType="line" />
          <Charts accountData={accountData} chartType="pie" />
        </div>
      </div>
    </div>
  )
}

export default Balance