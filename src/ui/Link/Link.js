import React from 'react';
import {NavItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import classes from './Link.css';

const NavigationLink = (props) => (

    <NavItem>
        <Link to={props.linkTo}>
            <Button color="link" className={classes.link}>
           {props.name}</Button>
        </Link>
    </NavItem>  
);

export default NavigationLink;