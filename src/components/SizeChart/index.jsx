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
                    <th colSpan="4">Plus Size Bottoms</th>
                </tr>
                <tr>
                    <th>Size</th>
                    <th>SizeSegment</th>
                    <th>Waist</th>
                    <th>Hip</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>00X</td>
                    <td>12</td>
                    <td>34</td>
                    <td>43</td>
                </tr>


                <tr>
                    <td rowSpan="2">0X</td>
                    <td>14</td>
                    <td>36</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>38</td>
                    <td>47</td>
                </tr>


                <tr>
                    <td rowSpan="2">1X</td>
                    <td>18</td>
                    <td>40</td>
                    <td>49</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>42</td>
                    <td>51</td>
                </tr>


                <tr>
                    <td rowSpan="2">2X</td>
                    <td>22</td>
                    <td>44</td>
                    <td>53</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>46</td>
                    <td>55</td>
                </tr>

            </tbody>
        </Table>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th colSpan="5">Plus Size Tops & Dresses </th>
                </tr>
                <tr>
                    <th>Size</th>
                    <th>SizeSegment</th>
                    <th>Bust</th>
                    <th>Waist</th>
                    <th>Hip</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="2">0X</td>
                    <td>14</td>
                    <td>41</td>
                    <td>36</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>43</td>
                    <td>38</td>
                    <td>47</td>
                </tr>

                <tr>
                    <td rowSpan="2">1X</td>
                    <td>18</td>
                    <td>45</td>
                    <td>40</td>
                    <td>49</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>47</td>
                    <td>42</td>
                    <td>51</td>
                </tr>



                <tr>
                    <td rowSpan="2">2X</td>
                    <td>22</td>
                    <td>49</td>
                    <td>44</td>
                    <td>53</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>51</td>
                    <td>46</td>
                    <td>55</td>
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
