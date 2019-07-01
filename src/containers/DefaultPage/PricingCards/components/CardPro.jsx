import React from 'react';
import {Button, Card, CardBody, Col} from 'reactstrap';

const airplane = `${process.env.PUBLIC_URL}/img/pricing_cards/003-airplane.svg`;

const CardPro = () => (
    <Col md={6} xl={3} sm={12}>
        <Card className="pricing-card pricing-card--warning">
            <CardBody className="pricing-card__body">
                <img className="pricing-card__img" src={airplane} alt=""/>
                <h3 className="pricing-card__plan">Pro</h3>
                <hr/>
                <p className="pricing-card__price">$10<span>/mo</span></p>
                <p className="pricing-card__feature">6 Users</p>
                <p className="pricing-card__feature">1 Tb storage</p>
                <p className="pricing-card__feature">Monthly update</p>
                <p className="pricing-card__feature pricing-card__feature--inactive">Free
                    support</p>
                <Button className="pricing-card__button" color="primary">Sign Up</Button>
            </CardBody>
        </Card>
    </Col>
);

export default CardPro;
