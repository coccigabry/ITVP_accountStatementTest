import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../context/context'
import HomeImg from '../assets/Illustration.png'


const Home = () => {

  const { isUserLogged, isFileImported, toggleIsFileImported } = useGlobalContext()
  const [file, setFile] = useState(null)
  const navigate = useNavigate()


  const handleUpload = async (e) => {
    setFile(e.target.files[0])
    try {
      const formData = new FormData()
      formData.append('file', file)
      await axios.post('http://localhost:4000/api/account/upload', formData)
      toggleIsFileImported()
      navigate('/balance')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => { if (isFileImported) toggleIsFileImported() }, [])


  return (
    <div className='homeContainer'>
      <div className="leftContainer">
        <div className="leftWrapper">
          <div className="leftText">
            {
              isUserLogged
                ? (
                  <>
                    <h1 className="leftTextTitle">
                      Import your transaction file with a few clicks
                    </h1>
                    <p className="leftTextDesc">
                      Upload is made easy for you.
                    </p>
                    <form>
                      <label htmlFor="file" className="leftImportBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="uploadIcon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <span>IMPORT</span>
                      </label>
                      <input style={{ display: 'none' }} type="file" id="file" accept=".csv" onChange={handleUpload} />
                    </form>
                  </>
                )
                : (
                  <>
                    <h1 className="leftTextTitle">
                      First time here?
                    </h1>
                    <p className="leftTextDesc">
                      Sign in and start checking your account statements.
                    </p>
                  </>
                )
            }
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <img src={HomeImg} alt='girl on pc illustration' />
      </div>
    </div>
  )
}

export default Home