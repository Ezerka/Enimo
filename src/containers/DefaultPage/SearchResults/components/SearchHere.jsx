/* eslint-disable react/no-array-index-key,react/no-unused-state */
import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import Pagination from '../../../../shared/components/pagination/Pagination';
import SearchResult from './SearchResult';
import results from './results';

export default class SearchHere extends PureComponent {
    constructor() {
        super();

        this.state = {
            rows: results,
            pageOfItems: [],
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems});
    }

    render() {
        return (
            <Col md={12} lg={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">Search here</h5>
                        </div>
                        <form className="form">
                            <div className="form__form-group">
                                <div className="form__form-group-field">
                                    <input name="search" type="text" placeholder="Search..."
                                           defaultValue="Invoice template"/>
                                    <div className="form__form-group-icon">
                                        <MagnifyIcon/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <h4>{'Search result for \'Invoice template\''}</h4>
                        <h4 className="subhead">Found 18 results</h4>
                        <div>
                            {results.slice(0, 10).map((r, i) =>
                                <SearchResult key={i} title={r.title} link={r.link}
                                              preview={r.preview}/>)}
                        </div>
                        <Pagination items={this.state.rows} onChangePage={this.onChangePage}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
