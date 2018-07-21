import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, PageHeader, Button, Thumbnail, Panel, FormGroup, Radio, ControlLabel } from 'react-bootstrap';

import { toggleModal, updateProduct } from '../../actions/action-creators/app';

import AppBody from '../../components/AppBody';

const mapStateToProps = ({ app: { productDetails } }) => ({
    productDetails
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        toggleModal, updateProduct,
    },
        dispatch)
);

class ProductDetails extends Component{
    componentWillMount() {
        const { updateProduct } = this.props;
        const savedData = localStorage.getItem('productSize');
        
        if (!!savedData) {
            updateProduct(JSON.parse(savedData));
        }
    }

    render() {
        const {
            image,
            fit,
            color,
            size,
            name,
            description,
            shortDescription,
        } = this.props.productDetails;
    
        const checkSize = (type) => {
            const { toggleModal } = this.props;
            toggleModal({
                modal: 'modal',
                active: true,
                type,
            });
        }
    
        return (
            <AppBody align="center">
                <PageHeader>
                    Product Details
                </PageHeader>
                <Row>
                    <Col md={6} xs={6} className="border border-primary">
                        <Thumbnail src={image} alt="242x200">
                            <h3>{shortDescription}</h3>
                            <p>{name}</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col md={6} xs={6}>
                    <Row>
                        <Col md={12} xs={12}>
                            <FormGroup align="left">
                                <ControlLabel>Select Fit </ControlLabel>
                            </FormGroup>
                            <FormGroup align="left">
                                <Radio name="radioGroup1" value="regular" checked={fit === 'regular'} inline>
                                    Regular
                                </Radio>{' '}
                                <Radio name="radioGroup1" value="petite" checked={fit === 'petite'} inline>
                                    Petite
                                </Radio>{' '}
                                <Radio name="radioGroup1" value="tall" checked={fit === 'tall'} inline>
                                    Tall
                                </Radio>
                            </FormGroup>
                        </Col>
                        <hr />
                        <Col md={12} xs={12}>
                            <FormGroup align="left">
                                <ControlLabel>Select Color </ControlLabel>
                            </FormGroup>
                            <FormGroup align="left">
                                <Radio name="radioGroup2" value="blue" checked={color === 'blue'} inline>
                                    Blue
                                </Radio>{' '}
                                <Radio name="radioGroup2" value="black" checked={color === 'black'} inline>
                                    Black
                                </Radio>{' '}
                                <Radio name="radioGroup2" value="green" checked={color === 'green'} inline>
                                    Green
                                </Radio>
                            </FormGroup>
                        </Col>
                        <hr />
                        <Col md={12} xs={12}>
                            <FormGroup align="left">
                                <ControlLabel>Select Size </ControlLabel>
                            </FormGroup>    
                            <FormGroup align="left">
                                <Radio name="radioGroup3" value="xxs" checked={size === 'xxs'} inline>
                                    12
                                </Radio>{' '}
                                <Radio name="radioGroup3" value="xs" checked={size === 'xs'} inline>
                                    14
                                </Radio>{' '}
                                <Radio name="radioGroup3" value="s" checked={size === 's'} inline>
                                    16
                                </Radio>
                                <Radio name="radioGroup" value="m" checked={size === 'm'} inline>
                                    20
                                </Radio>
                                <Radio name="radioGroup" value="l" checked={size === 'l'} inline>
                                    24
                                </Radio>
                            </FormGroup>
                        </Col>
                        <hr />
                        <Col md={12} xs={12}>
                            <Panel>
                                <ControlLabel>Product Description </ControlLabel>
                                <Panel.Body align="left">
                                    {description}
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col md={12} xs={12}>
                            <Button className="btn btn-primary pull-left" onClick={() => checkSize('size')}>Get My Fit</Button>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </AppBody>
        );
    }
}

ProductDetails.defaultProps = {
    productDetails: {},
};

ProductDetails.propTypes = {
    productDetails: PropTypes.shape({
        fit: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.string,
    }),
    toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
