import React from 'react';
import { connect } from 'react-redux';
import { nextPage } from '../../reducers/currentPageReducer';


class Begin extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log('in summary', this.props)
        let basicInfo = this.props.basicInfo,
            location = this.props.location,
            education = this.props.education;

        return (
            <div>
                <h4>Please confirm the info below:</h4>
                <div>
                    <h6>Basic Info</h6>
                    <ul>
                    <li>First Name: {basicInfo.firstName}</li>
                    <li>Last Name: {basicInfo.lastName}</li>
                    <li>Email: {basicInfo.email}</li>
                    <li>Website: {basicInfo.website}</li>
                    </ul>
                </div>
                <div>
                    <h6>Location</h6>
                    City:
                State:
                Country:
                </div>
                <div>
                    <h6>Education</h6>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        basicInfo: state.basicInfo,
        location: state.location,
        education: state.education
    }
}

const mapDispatchToProps = {
    nextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Begin)