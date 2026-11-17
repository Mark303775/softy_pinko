import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import entry01 from '../assets/images/blog-item-01.png'
import entry02 from '../assets/images/blog-item-02.png'
import entry03 from '../assets/images/blog-item-03.png'

const Blog = () => {
    const card=[
        {
            link:"Vivamus ac vehicula dui",
            text:"Cras aliquet ligula dui, vitae fermentum velit tincidunt id Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.",
            btn:"READ MORE"

        },
          {
            link:"Phasellus convallis augue",
            text:"Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac  Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.",             
            btn:"READ MORE"

        },
          {
            link:"Nam gravida purus non",
            text:"Maecenas eu erat vitae dui convallis consequat vel gravida nulla Vestibulum finibus euismod odio, ut tempus enim varius eu.",            
            btn:"READ MORE"

        },
    ]
  return (
    <>
        <section className='blog mt-5 mb-5' id='blog'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>Blog Entries</h3>
                        <p className='mt-4'>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </Col>
                </Row>
                 <Row className='mt-5'>
                {
                    card.map((item,index)=>(
                       <Col className='col-12 col-sm-12 col-md-6 col-lg-4 entry' key={index}>
                        <img src={entry01} />
                        <div className="txt">
                            <h5><a href="">{item.link}</a></h5>
                            <p>{item.text}</p>
                        </div>

                        <Button>{item.btn}</Button>
                    </Col>
                    ))
                }
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Blog