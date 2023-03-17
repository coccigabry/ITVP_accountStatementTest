import { useEffect, useState } from "react"


const AccountCard = ({ account, accountData, handleClick, selectedAccount }) => {

  const [balanceEUR, setBalanceEUR] = useState(null)
  const [balanceUSD, setBalanceUSD] = useState(null)
  const [lastUpdateDate, setLastUpdateDate] = useState(null)


  const getTotal = (value) => {
    let creditOps = []
    let debitOps = []

    const filteredByValueData = accountData.filter(op => op.Divisa === value)
    filteredByValueData.length > 0 &&
      filteredByValueData.forEach(op =>
        op.Tipo === "Versamento" || op.Tipo === "Vendita"
          ? creditOps.push(+op.Valorenetto)
          : debitOps.push(+op.Valorenetto)
      )

    const totCreditOps = creditOps.reduce((initVal, currVal) => initVal + currVal, 0)
    const totDebitOps = debitOps.reduce((initVal, currVal) => initVal + currVal, 0)
    const balance = (totCreditOps - totDebitOps).toFixed(2)

    return balance
  }

  const getLastUpdateDate = (account) => {
    const filteredByAccount = accountData.filter(op => op.Conto === account)
    const result = filteredByAccount.length > 0 &&
      filteredByAccount.reduce((a, b) => a.Data > b.Data ? a : b);

    return (result.Data)
  }


  useEffect(() => {
    setBalanceEUR(getTotal('EUR'))
    setBalanceUSD(getTotal('USD'))
    setLastUpdateDate(getLastUpdateDate(account))
  }, [accountData])



  return (
    <div
      className={selectedAccount === account ? 'accountCardWrapper active' : 'accountCardWrapper'}
      onClick={() => handleClick(account)}
    >
      <h3 className="accountNumber">
        ACCOUNT {account}
      </h3>
      <div className="accountBalanceContainer">
        <p className="balanceValue">
          Euro balance
        </p>
        <p className="balanceAmount">
          € {balanceEUR}
        </p>
      </div>
      <div className="accountBalanceContainer">
        <p className="balanceValue">
          US Dollars balance
        </p>
        <p className="balanceAmount">
          $ {balanceUSD}
        </p>
      </div>
      <div className="balanceDate">
        {lastUpdateDate}
      </div>
    </div>
  )
}

export default AccountCard