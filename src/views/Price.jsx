import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Price = () => {
    const card =[
        {
            title:"Starter",
            text1:"14.50",
            text2:"monthly",
            text3:"60 GB space",
            text4:"600 GB transfer",
            text5:"Pro Design Panel",
            text6:"15-minute support",
            text7:"Unlimited Emails",
            text8:"24/7 Security",
            btn:"PURCHASE NOW"
        },
            {
            title:"Premium",
            text1:"21.50",
            text2:"monthly",
            text3:"120 GB space",
            text4:"1200 GB transfer",
            text5:"Pro Design Panel",
            text6:"15-minute support",
            text7:"Unlimited Emails",
            text8:"24/7 Security",
            btn:"PURCHASE NOW"
        },
         {
            title:"Advanced",
            text1:"42.00",
            text2:"monthly",
            text3:"250 GB space",
            text4:"5000 GB transfer",
            text5:"Pro Design Panel",
            text6:"15-minute support",
            text7:"Unlimited Emails",
            text8:"24/7 Security",
            btn:"PURCHASE NOW"
        },
    ]
  return (
    <>
        <section className='price mt-5' id='price'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>Pricing Plans</h3>
                        <p className='mt-4'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    {
                        card.map((item,index)=>(
                          <Col className='col-12 col-sm-12 col-md-6 col-lg-4 list'key={index}>
                        <p className="name">{item.title}</p>
                        
                        <div className="num">
                            <p><span>$</span> {item.text1}</p>
                            <p><small>{item.text2}</small></p>
                        </div>

                        <div className="details">
                            <p>{item.text3}</p>
                            <p>{item.text4}</p>
                            <p>{item.text5}</p>
                            <p><del>{item.text6}</del></p>
                            <p><del>{item.text7}</del></p>
                            <p><del>{item.text8}</del></p>
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

export default Price