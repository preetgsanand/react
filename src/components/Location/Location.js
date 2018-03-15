import React from 'react';
import {Input} from 'reactstrap';

const Location = (props) => {
        return (<Input
            type="text"
            placeholder="Enter Location"
            onChange={(event) => props.onLocationUpdate(event)}/>);
}

export default Location;