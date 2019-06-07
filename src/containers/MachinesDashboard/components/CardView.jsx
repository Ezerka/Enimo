import React from 'react';
import {Card, CardBody, Col} from 'reactstrap';

const SampleCardView = () => (
    <Col md={12}>
        <Card>
            <CardBody>
                <div className="card__title">
                    <h5 className="bold-text">Machines</h5>
                    <h5 className="subhead"> Machines Subheading </h5>
                </div>
                <p>Machines Content</p>
            </CardBody>
        </Card>
    </Col>
);

export default SampleCardView;
