import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';

class HistoryDashboard extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };

    render() {

        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">History Dashboard</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default (HistoryDashboard);
