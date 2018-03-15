import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav} from 'reactstrap';
import NavigationLink from '../../ui/Link/Link';
import classes from './Navigation.css';
import Location from '../../components/Location/Location';
import {connect} from 'react-redux';
import {getWeather} from '../../http/axios';

class Navigation extends React.Component {
    onLocationUpdate(event) {
        this
            .props
            .updateLocation(event.target.value);
        this.weather(event.target.value);
    }

    weather(location) {
        if (location !== undefined && location.length > 3) {
            getWeather((data) => {
                console.log(data)
                this
                    .props
                    .onWeatherUpdate(data);
            }, location)
        }
    }

    render() {
        return <div>
            <Navbar color="info" dark expand="md">
                <NavbarBrand className={classes.navBrand}>Weather App</NavbarBrand>
                <NavbarToggler
                    onClick={() => this.props.collapseNavbar(!this.props.navigation.collapsed)}
                    className="mr-2"/>
                <Collapse isOpen={this.props.navigation.collapsed} navbar>
                    <Nav navbar>
                        <NavigationLink linkTo="/" name="Weather"/>
                        <NavigationLink linkTo="/forecast" name="Forecast"/>
                        <Location onLocationUpdate={(event) => this.onLocationUpdate(event)}/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }
};

const mapStateToProps = state => {
    return {navigation: state.app.navigation, weather: state.app.weather}
}

const mapDispatchToProps = dispatch => {
    return {
        collapseNavbar: (collapsed) => dispatch({type: 'TOGGLE_NAVBAR_UPDATE', payload: collapsed}),
        updateLocation: (location) => dispatch({type: 'LOCATION_UPDATE', payload: location}),
        onWeatherUpdate: (weather) => dispatch({type: 'UPDATE_WEATHER', payload: weather})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);