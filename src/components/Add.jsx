import { faCloudArrowUp ,faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({setAddVideoStatus}) { /* to access only the key , thus destructor it */

  const [videoDetails , setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    embededLink:""
  })

    const [show, setShow] = useState(false);

    console.log(videoDetails);
    

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

   /*  const getEmbedLink = (e)=>{
      const link = e.target.value
      if(link.startsWith('https://youtu.be/')){
        const embedL = `https://www.youtube.com/embed/${link.slice(17,28)}`
        setVideoDetails({...videoDetails, embededLink:embedL})
      }else{
        const embedL = `https://www.youtube.com/embed/${link.slice(-11)}`
        setVideoDetails({...videoDetails, embededLink:embedL})
      }
    }
 */

    const handleCancel = ()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        embededLink:""
      })
    }

    const handleAdd = async()=>{
    const {caption , imageUrl , embededLink} = videoDetails

    if(!caption || !imageUrl || !embededLink){
      toast.info('Please fill the form completely')
    }
    else{
      if(videoDetails.embededLink.startsWith('https://youtu.be/')){
        const embedL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(17,28)}`
        /* setVideoDetails({...videoDetails, embededLink:embedL}) */

        const result = await AddVideoApi({...videoDetails, embededLink:embedL})
        console.log(result);

       if(result.status>=200 && result.status<300){
        toast.success('Video Uploded successfully')
        handleClose()
        setAddVideoStatus(result.data)
      }
      else{
        toast.error('Something went wrong')
        handleClose()
      } 
        
    }
    else{
      const embedL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(-11)}`
        /* setVideoDetails({...videoDetails, embededLink:embedL}) */

        const result = await AddVideoApi({...videoDetails, embededLink:embedL})
        console.log(result);  
        
        if(result.status>=200 && result.status<300){
          toast.success('Video Uploded successfully')
          handleClose()
          setAddVideoStatus(result.data)

        }
        else{
          toast.error('Something went wrong')
          handleClose()
        } 
    }
    }
  }

  return (
    <>
        <div className='d-flex align-items-center'>
            <h5 className='d-none d-md-inline'>Upload New Video</h5>
            <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fa-5' /></button>
        </div>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFile} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<h6>
                Please fill the following details
    
</h6>            <form className="p-3 border border-dark rounded mt-3">
                <div className='mb-3'>
                    <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, caption:e.target.value})} />
                </div>
                <div className='mb-3'>
                <input type="text" value={videoDetails.imageUrl} placeholder='Video Image' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, imageUrl:e.target.value})} />
                </div>
                <div className='mb-3'>
                <input type="text" value={videoDetails.embededLink} placeholder='Video Url' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,embededLink:e.target.value})} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" type='button' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored"/>
    </>
  )
}

export default Add