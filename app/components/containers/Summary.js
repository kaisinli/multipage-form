import React from 'react';
import { connect } from 'react-redux';
import { basicPage, locationPage, educationPage } from '../../reducers/currentPageReducer';


class Begin extends React.Component {
    constructor(props) {
        super(props)
        this.basicClickHandler = this.basicClickHandler.bind(this);
        this.locationClickHandler = this.locationClickHandler.bind(this)
        this.educationClickHandler = this.educationClickHandler.bind(this)
    }

    basicClickHandler() {
        this.props.basicPage()
    }

    locationClickHandler() {
        this.props.locationPage()
    }

    educationClickHandler() {
        this.props.educationPage()
    }

    render() {
        let info = this.props.info;
        console.log(this.props)

        return (
            <div>
                <h4>Please confirm the info below:</h4>
                <div>
                    <h6>Basic Info <button onClick={this.basicClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>First Name:</b> {info.firstName}</li>
                        <li><b>Last Name:</b> {info.lastName}</li>
                        <li><b>Email:</b> {info.email}</li>
                        <li><b>Website:</b> {info.website}</li>
                    </ul>
                </div>
                <div>
                    <h6>Location <button onClick={this.locationClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>City:</b> {info.city}</li>
                        <li><b>State:</b> {info.state}</li>
                        <li><b>Country</b> {info.country}</li>
                    </ul>
                </div>
                <div>
                    <h6>Education <button onClick={this.educationClickHandler} className="summary-button">edit</button></h6>
                    <ul>
                        <li><b>School 1:</b> {info.school[0]}</li>
                        {info.school[1] && <li><b>School 2:</b>{info.school[1]}</li>}
                    </ul>
                </div>
                <button className="btn btn-success">Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = {
    basicPage,
    locationPage,
    educationPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Begin)