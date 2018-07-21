import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, FormGroup, Col, Button, Checkbox, ControlLabel, FormControl, Image } from 'react-bootstrap';

import { toggleModal, updateProduct, saveSize, getSize } from '../../actions/action-creators/app';
import Recommendation from '../Recommendations';

const mapDispatchToProps = dispatch => (
    bindActionCreators({ toggleModal, updateProduct, saveSize, getSize }, dispatch)
);

export class BestFit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            waist: '',
            shoulder: '',
            height: '',
            checked: false,
            waistError: true,
            shoulderError: true,
            heightError: true,
            sizeState: 'enterValues',
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.showNext = this.showNext.bind(this);
        this.checkSize = this.checkSize.bind(this);
    }

    submit(){
        const { checked } = this.state;
        const { toggleModal, updateProduct, saveSize } = this.props;
        toggleModal({
            modal: 'modal',
            active: false,
        });
        const productDetails = {
            fit: 'petite',
            color: 'black',
            size: 's',
        };
        updateProduct(productDetails);
        if (checked) {
            saveSize(productDetails);
        }
    }

    checkSize(type){
        const { toggleModal } = this.props;
        toggleModal({
            modal: 'modal',
            active: true,
            type,
        });
    }

    showNext(sizeState) {
        this.setState({
            sizeState,
        });
    }

    handleChange(event, key) {
        const { target } = event;
        const { value = '', checked = false } = target;
        this.setState({
            [key]: key === 'checked' ? checked : value,
        }, () => {
            this.setState({
                [`${key}Error`]: value === '' ? true : false,
            });
        });
    }

    render() {
        const { waist, shoulder, height, checked, sizeState } = this.state;
        const { waistError, shoulderError, heightError } = this.state;
        const { recommendations, image } = this.props;

        return (
            <Fragment>
                {
                    sizeState === 'enterValues' &&
                    <Form horizontal>
                        <Col sm={8}>
                            <FormGroup controlId="formHorizontalWaist" validationState={waistError ? 'error' : 'success'}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Waist
                                </Col>
                                <Col sm={10}>
                                    <FormControl 
                                        type="text"
                                        value={waist}
                                        placeholder="Enter Waist"
                                        onChange={(event) => this.handleChange(event, 'waist')}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalShoulder" validationState={shoulderError ? 'error' : 'success'}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Shoulder
                                </Col>
                                <Col sm={10}>
                                    <FormControl 
                                        type="text"
                                        value={shoulder}
                                        placeholder="Enter Shoulder"
                                        onChange={(event) => this.handleChange(event, 'shoulder')}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalHeight" validationState={heightError ? 'error' : 'success'}>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Height
                                </Col>
                                <Col sm={10}>
                                    <FormControl 
                                        type="text"
                                        value={height}
                                        placeholder="Enter Height"
                                        onChange={(event) => this.handleChange(event, 'height')}
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup>
                                <Col smOffset={2} sm={8}>
                                    Not interested in giving details .... ?
                                    <Button className="btn btn-warning" onClick={() => this.checkSize('chart')}>view our size chart</Button>                                    
                                </Col>
                            </FormGroup>
                        </Col>
                        
                        <Col sm={4}>
                            <Image src={image} thumbnail />
                        </Col>

                        {/* <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Checkbox checked={checked} onChange={(event) => this.handleChange(event, 'checked')}>Remember me</Checkbox>
                            </Col>
                        </FormGroup> */}

                        <FormGroup>
                            {/* <Col smOffset={2} sm={10}>
                                <Button onClick={() => this.showNext('recommendedSize')} bsStyle="primary">Next</Button>
                            </Col> */}
                        </FormGroup>
                        <Button className="btn btn-primary pull-right" onClick={() => this.showNext('recommendedSize')} bsStyle="primary">Next</Button>
                        <Button className="btn btn-primary pull-left" target="_blank" href="https://printable-ruler.net/wp-content/uploads/2016/05/measuring-tape-24in-16th-inches-A4.pdf">Print Ruler</Button>
                    </Form>
                }
                {
                    sizeState === 'recommendedSize' &&
                    <Form horizontal>
                        <Col md={12} xs={12} className="border border-primary">
                            <Recommendation 
                                recommendations={recommendations}
                            />
                        </Col>
                        <br />
                        <FormGroup>
                            <Col smOffset={2} sm={4}>
                                <Button onClick={() => this.showNext('enterValues')} bsStyle="primary">Prev</Button>
                            </Col>
                            <Col smOffset={2} sm={4}>
                                <Button onClick={this.submit} bsStyle="primary">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                }
            </Fragment>
        );
    }
}

BestFit.defaultProps = {
    modal: {
        active: false, // modal closed by default
    },
    recommendations: [],
    image: 'https://image.ibb.co/eMtSYd/waist.png',
};

BestFit.propTypes = {
    modal: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
    getSize: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BestFit);
