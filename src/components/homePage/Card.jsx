import card from '../../assets/images/featured-item-01.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 


const Card = () => {
    const cardsData = [
        {
            title: "Modern Strategy",
            text: "Customize anything in this template to fit your website needs"
        },
        {
            title: "Best Relationship",
            text: "Contact us immediately if you have a question in mind"
        },
        {
            title: "Ultimate Marketing",
            text: "You just need to tell your friends about our free templates"
        }
    ];

    return (
        <Container className="cards">
            <Row>
                {cardsData.map((item, index) => (
                    <Col key={index} className="card col-12 col-sm-12 mb-4 mt-8 mt-lg-0 mb-lg-0 col-md-6  col-lg-4">
                        <div className='img'>
                            <img src={card}/>
                        </div>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Card;
