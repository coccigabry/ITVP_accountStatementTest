import { useEffect, useState } from "react"


const AccountCard = ({ account, accountData, handleClick, selectedAccount }) => {

  const [balance, setBalance] = useState({
    balanceEUR: 0,
    balanceUSD: 0
  })
  const [lastUpdateDate, setLastUpdateDate] = useState(null)
  const [showSecurity, setShowSecurity] = useState(false)


  const getBalance = (value) => {
    let credit = []
    let debit = []

    let securityCredit = []
    let securityDebit = []

    const filteredByValue = accountData.filter(op => op.Divisa === value)
    filteredByValue.length > 0 &&
      filteredByValue.forEach(op => {
        if (op.Tipo === "Versamento" || op.Tipo === "Vendita") {
          credit.push(+op.Valorenetto)
          op.ISIN.length > 3 && securityCredit.push(+op.Valorenetto)
        } else {
          debit.push(+op.Valorenetto)
          op.ISIN.length > 3 && securityDebit.push(+op.Valorenetto)
        }
      })

    const totCredit = credit.reduce((initVal, currVal) => initVal + currVal, 0)
    const totDebit = debit.reduce((initVal, currVal) => initVal + currVal, 0)

    const totSecurityCredit = securityCredit.reduce((initVal, currVal) => initVal + currVal, 0)
    const totSecurityDebit = securityDebit.reduce((initVal, currVal) => initVal + currVal, 0)

    const balance = (totCredit - totDebit).toFixed(2)
    const security = (totSecurityCredit - totSecurityDebit).toFixed(2)

    return { balance, security }
  }

  const getLastUpdateDate = (account) => {
    const filteredByAccount = accountData.filter(op => op.Conto === account)
    const result = filteredByAccount.length > 0 &&
      filteredByAccount.reduce((a, b) => a.Data > b.Data ? a : b);
    return (result.Data)
  }

  const handleShowSecurity = () => setShowSecurity(!showSecurity)


  useEffect(() => {
    setBalance({ balanceEUR: getBalance('EUR'), balanceUSD: getBalance('USD') })
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
          € {balance.balanceEUR.balance}
        </p>
      </div>
      <div className="accountBalanceContainer">
        <p className="balanceValue">
          US Dollars balance
        </p>
        <p className="balanceAmount">
          $ {balance.balanceUSD.balance}
        </p>
      </div>
      <div className="accountBalanceContainer">
        <div className="securityBalanceText">
          <span>Security balance</span>
          {
            showSecurity
              ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="eyeIcon" onClick={handleShowSecurity}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="eyeIcon" onClick={handleShowSecurity}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
          }
        </div>
        {
          showSecurity &&
          <div className="securityBalanceAmount">
            <p>€ {balance.balanceEUR.security}</p>
            <p>$ {balance.balanceUSD.balance}</p>
          </div>
        }
      </div >
      <div className="balanceDate">
        <p>last operation:</p>
        {lastUpdateDate}
      </div>
    </div >
  )
}

export default AccountCard