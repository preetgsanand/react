import React from 'react';
import Aux from '../hoc/Aux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weather from '../containers/Weather/Weather';
import Forecast from '../containers/Forecast/Forecast';
import Navigation from '../containers/Navigation/Navigation';

class Layout extends React.Component {
    render() {
        return (
            <Router>
                <Aux>
                    <Navigation/>
                    <div>
                        <Route exact path="/" component={Weather}/>
                        <Route path="/forecast" component={Forecast}/>
                    </div>
                </Aux>
            </Router>
        )
    }
};

export default Layout;