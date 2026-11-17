import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testi from '../assets/images/testimonial-icon.png'

const Testimonials = () => {
    const card=[
        {
            title:"Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.",
            text:"Catherine Soft",
            desc:"Managing Director"
            
        },
         {
            title:"Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
            text:"Kelvin Wood",
            desc:"Digital Marketer"
            
        },
          {
            title:"Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.",
            text:"David Martin",
            desc:"Website Manager"
            
        },
    ]
  return (
    <> 
        <section className='testi mt-5 mb-5' id='testi'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>What do they say?</h3>
                        <p className='mt-4'>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </Col>
                </Row>
                  <Row className='mt-5'>
                {
                    card.map((item,index)=>(
                         <Col className='col-12 col-sm-6 col-md-4 testimonial'key={index}>
                        <img src={testi} />
                        <p>{item.title}</p>
                        <div className="desc">
                            <h5>{item.text}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                   
                    ))
                }

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Testimonials