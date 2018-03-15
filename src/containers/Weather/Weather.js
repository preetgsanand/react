import React from 'react';
import {connect} from 'react-redux';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

class Weather extends React.Component {
    render() {
        return <Card>
            <CardImg top width="100%"/>
            <CardBody>
                <CardTitle>{this.props.weather.name}</CardTitle>
                <CardSubtitle>Min : {this.props.weather.main.temp_min}, 
                Max : {this.props.weather.main.temp_max}</CardSubtitle>
                <CardText>You will be expriencing  {this.props.weather.weather[0].description}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {weather: state.app.weather}
}

export default connect(mapStateToProps)(Weather);