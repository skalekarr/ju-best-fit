import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Table } from 'react-bootstrap';
import { toggleModal } from '../../actions/action-creators/app';

const mapStateToProps = ({ app: { sizeChart } }) => ({
    sizeChart
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        toggleModal,
    },
        dispatch)
);

const SizeChart = ({
    sizeChart,
    toggleModal,
}) => (
    <Fragment>
        <Table striped bordered condensed hover>
            <thead>
                <tr align="center">
                    <th colSpan="4">Bottoms</th>
                </tr>
                <tr>
                    <th>Size</th>
                    <th>Height</th>
                    <th>Waist</th>
                    <th>Hip</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>6 Reg</th>
                    <th>46-49</th>
                    <th>22</th>
                    <th>25.5</th>
                </tr>
                <tr>
                    <th>7 Reg</th>
                    <th>49-52</th>
                    <th>22.5</th>
                    <th>27</th>
                </tr>
                <tr>
                    <th>8 Reg</th>
                    <th>52-55</th>
                    <th>23</th>
                    <th>28.5</th>
                </tr>
                <tr>
                    <th>10 Reg</th>
                    <th>55-58</th>
                    <th>24.5</th>
                    <th>30</th>
                </tr>
                <tr>
                    <th>12 Reg</th>
                    <th>58-60</th>
                    <th>25</th>
                    <th>32</th>
                </tr>
                <tr>
                    <th>14 Reg</th>
                    <th>60-62</th>
                    <th>26</th>
                    <th>34</th>
                </tr>
                <tr>
                    <th>16 Reg</th>
                    <th>62-63</th>
                    <th>27</th>
                    <th>36</th>
                </tr>
                <tr>
                    <th>18 Reg</th>
                    <th>62-63</th>
                    <th>28</th>
                    <th>37.5</th>
                </tr>
                <tr>
                    <th>20 Reg</th>
                    <th>62-63</th>
                    <th>29</th>
                    <th>38.5</th>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered condensed hover>
            <thead>
                <tr align="center">
                    <th colSpan="6">Tops</th>  
                </tr>
                
                <tr>
                    <th>Size</th>
                    <th>Size Segment</th>
                    <th>Height</th>
                    <th>Waist</th>
                    <th>Hips</th>
                    <th>Chest</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowSpan="2">XS/S</th>
                    <th>6 Reg</th>
                    <th>46-49</th>
                    <th>22</th>
                    <th>25.5</th>
                    <th>24.5</th>
                </tr>
                <tr>
                    <th>7 Reg</th>
                    <th>49-52</th>
                    <th>22.5</th>
                    <th>27</th>
                    <th>26</th>
                </tr>
                <tr>
                    <th rowSpan="3">M</th>
                    <th>8 Reg</th>
                    <th>52-55</th>
                    <th>23</th>
                    <th>28.5</th>
                    <th>27.5</th>
                </tr>
                <tr>
                    <th>10 Reg</th>
                    <th>55-58</th>
                    <th>24.5</th>
                    <th>30</th>
                    <th>29</th>
                </tr>
                <tr>
                    <th>12 Reg</th>
                    <th>58-60</th>
                    <th>25</th>
                    <th>32</th>
                    <th>30.5</th>
                </tr>
                <tr>
                    <th rowSpan="3">L</th>
                    <th>14 Reg</th>
                    <th>60-62</th>
                    <th>26</th>
                    <th>34</th>
                    <th>32</th>
                </tr>
                <tr>
                    <th>16 Reg</th>
                    <th>62-63</th>
                    <th>27</th>
                    <th>36</th>
                    <th>33.5</th>
                </tr>
                <tr>
                    <th>18 Reg</th>
                    <th>62-63</th>
                    <th>28</th>
                    <th>37.5</th>
                    <th>35</th>
                </tr>
                <tr>
                    <th>XL</th>
                    <th>20 Reg</th>
                    <th>62-63</th>
                    <th>29</th>
                    <th>38.5</th>
                    <th>36</th>
                </tr>
            </tbody>
        </Table>
        <Button className="btn btn-primary pull-left" target="_blank" href="https://printable-ruler.net/wp-content/uploads/2016/05/measuring-tape-24in-16th-inches-A4.pdf">Print Ruler</Button>            
    </Fragment>
);

SizeChart.defaultProps = {
    sizeChart: [],
};

SizeChart.propTypes = {
    sizeChart: PropTypes.array,
    toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeChart);
