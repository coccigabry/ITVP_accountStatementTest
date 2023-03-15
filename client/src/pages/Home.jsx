import HomeImg from '../assets/Illustration.png'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="leftContainer">
        <div className="leftWrapper">
          <div className="leftText">
            <h1 className="leftTextTitle">
              Import your transaction file with a few clicks
            </h1>
            <p className="leftTextDesc">
              Upload is made easy for you.
            </p>
          </div>
          <button className="leftImportBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="uploadIcon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>

            <span>IMPORT</span>
          </button>
        </div>
      </div>
      <div className="rightContainer">
        <img src={HomeImg} alt='girl on pc illustration' />
      </div>
    </div>
  )
}

export default Home