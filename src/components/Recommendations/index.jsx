import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Image } from 'react-bootstrap';

class Recommendation extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: 'recommended',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        this.setState({
            selected,
        });
    }

    render() {
        const { image1, image2, image3 } = this.props;
        const { size1, size2, size3 } = this.props;
        const { fit1, fit2, fit3 } = this.props;
        
        const { selected } = this.state;

        return (
            <Fragment>
                {
                    selected === 'prev' &&
                    <div>
                        <Col sm={3}>
                            <p>Size: {size1}</p>
                            <p>Fit: {fit1}</p>
                        </Col>
                        <Col sm={9} className="border border-primary">
                            <Image src={image1} thumbnail />
                        </Col>
                    </div>
                }
                {
                    selected === 'recommended' &&
                    <div>
                        <Col sm={3}>
                            <p>Size: {size2}</p>
                            <p>Fit: {fit2}</p>
                        </Col>
                        <Col sm={9} className="border border-primary">
                            <Image src={image2} thumbnail />
                        </Col>
                    </div>
                }
                {
                    selected === 'next' &&
                    <div>
                        <Col sm={3}>
                            <p>Size: {size3}</p>
                            <p>Fit: {fit3}</p>
                        </Col>
                        <Col sm={9} className="border border-primary">
                            <Image src={image3} thumbnail />
                        </Col>
                    </div>
                }
                <Col sm={2}>
                    <Button onClick={() => this.handleChange('prev')} bsStyle="success">Prev Size</Button>
                </Col>
                <Col smOffset={2} sm={2}>
                    <Button autoFocus onClick={() => this.handleChange('recommended')} bsStyle="success">Recommended</Button>
                </Col>
                <Col smOffset={3} sm={2}>
                    <Button onClick={() => this.handleChange('next')} bsStyle="success">Next Size</Button>
                </Col>
                <hr />
            </Fragment>
        );
    }
}

Recommendation.defaultProps = {
    sizeChart: [],
    image1: 'https://image.ibb.co/jtN19J/underfit.png',
    image2: 'https://image.ibb.co/gxGHid/best.png',
    image3: 'https://image.ibb.co/i9vtOd/overfit.png',
    size1: 'S',
    size2: 'M',
    size3: 'L',
    fit1: 'Regula',
    fit2: 'Petite',
    fit3: 'Tall'
};

Recommendation.propTypes = {
    sizeChart: PropTypes.array,
};

export default Recommendation;
