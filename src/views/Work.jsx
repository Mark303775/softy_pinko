import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rocket from '../assets/images/work-process-item-01.png';

const Work = () => {
    const card=[
        {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         {
            title:"Get Ideas",
            text:"Godard pasbst parism fam cliche."
        },
         
      
    ]
  return (
    <>
  
        <section className='work' id='work'>
            <Container>
                <Row>
                  <Col className='title'>
                    <h3>Work Process</h3>
                    <p className='mt-4'>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                  </Col>
                </Row>
         <Row className='mt-5 justify-content-center'>
    {card.map((item, index) => (
        <Col key={index} xs={12} sm={8} md={4} lg={2} className='rocket'>
            <img src={rocket} alt={item.title} />
            <h5>{item.title}</h5>
            <p>{item.text}</p>
        </Col>
    ))}
</Row>
              
               
            </Container>
        </section>
    </>
  )
}

export default Work