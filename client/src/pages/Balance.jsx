import AccountCard from '../components/AccountCard'
import Specs from '../components/Specs'
import Charts from '../components/Charts'

const Balance = () => {
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