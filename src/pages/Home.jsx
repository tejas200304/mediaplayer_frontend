import React ,{useState} from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'


function Home() {
  const [addVideoStatus , setAddVideoStatus] = useState({})
  const [videoStatus , setVideoStatus] = useState({})

  return (
    <>
      <div className='d-flex p-md-5 p-3 align-items-center'>
        <Add setAddVideoStatus={setAddVideoStatus}/>
        <Link to={'/watchhistory'} className='ms-auto' style={{textDecoration:'none'}}><h5><span className='d-none d-md-inline'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-2' /></h5></Link>
      </div>

      <div className='container-fluid p-4'>
        <div className='row'>
          <div className='col-md-9'>
            <Allvideos addVideoStatus={addVideoStatus} setVideoStatus={setVideoStatus}/>
          </div>
          <div className='col-md-3'>
            <Category videoStatus = {videoStatus}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home