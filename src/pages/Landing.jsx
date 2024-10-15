import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items center py-5 px-4'>
      <Row className='mt-5 d-flex justify-content-center align-items-center'>
        <Col md={6}>
        <h2 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias corporis et doloribus, recusandae culpa corrupti itaque! Ea, molestiae. Architecto accusamus nulla quidem possimus consequatur ratione natus minus perspiciatis facilis!</p>
<Link to={'/home'}>
          <button className='btn btn-warning mt-5'>Get Started</button>
  
</Link>        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75'/>
        </Col>
      </Row>
    </Container>
    <Container className='mt-5'>
    <h3 className='text-center'>Featured</h3>

      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
        <Col md={4} className='p-3'>
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://img.izismile.com/img/img4/20110201/1000/stunning_animated_gifs_29.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col md={4} className='p-3'>
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://img.izismile.com/img/img4/20110201/1000/stunning_animated_gifs_22.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col md={4} className='p-3'>
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="http://img.izismile.com/img/img4/20110201/1000/stunning_animated_gifs_06.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        </Row>
        </Col>
        <Col md={1}></Col>

      </Row>
    </Container>

    <div className="container py-5 my-3">
      <div className="row p-md-5 border-light">
        <div className='col-md-6'>
          <h2 className='text-warning'>Simple fast and Powerful</h2>
          <p><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
          <p className='mt-2'><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
          <p className='mt-2'><span className='fs-4'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate quisquam inventore, ea ab accusantium deleniti illum, voluptate repellendus nobis magni voluptatem! Quidem impedit ipsam beatae adipisci culpa hic dignissimos!</p>
        </div>
        <div className="col-md-6">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fpn1imb9qZg" title="Coldplay - A Sky Full Of Stars (Live at River Plate)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
      </div>
    </div>
    </>
  )
}

export default Landing