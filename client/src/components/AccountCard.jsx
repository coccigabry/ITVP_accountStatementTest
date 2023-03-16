

const AccountCard = () => {

  return (
    <div className='accountCardWrapper'>
      <h3 className="accountNumber">
        ACCOUNT 1612660
      </h3>
      <div className="accountBalanceContainer">
        <p className="balanceValue">
          Euro balance
        </p>
        <p className="balanceAmount">
          €1,000,000
        </p>
      </div>
      <div className="accountBalanceContainer">
        <p className="balanceValue">
          US Dollars balance
        </p>
        <p className="balanceAmount">
          $20,000
        </p>
      </div>
      <div className="balanceDate">
        31/03/2021
      </div>
    </div>
  )
}

export default AccountCard