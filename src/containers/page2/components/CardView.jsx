import React from 'react';
import {Card, CardBody, Col} from 'reactstrap';

const CardView = () => (
    <Col md={12}>
        <Card>
            <CardBody>
                <div className="card__title">
                    <h5 className="bold-text">Page Two</h5>
                    <h5 className="subhead">Page Two Subheading </h5>
                </div>
                <p>Page 2 Content</p>
            </CardBody>
        </Card>
    </Col>
);

export default CardView;
