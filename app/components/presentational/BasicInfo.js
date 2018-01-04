import React from 'react';
import { connect } from 'react-redux';
import { putFirstName, putLastName, putEmail, putWebsite } from '../../reducers/basicInfoReducer';
import { nextPage } from '../../reducers/currentPageReducer';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { firstName: '' };
        this.submitHandler = this.submitHandler.bind(this);
        // this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()
        let target = event.target;
        this.props.putFirstName(target.firstName.value);
        this.props.putLastName(target.lastName.value);
        this.props.putEmail(target.email.value);
        this.props.putWebsite(target.website.value);
        this.props.nextPage()
    }

    // changeHandler(event) {
    //     const inputValue = event.target.value;
    //     this.setState({ firstName: inputValue });
    // }

    render() {
        return (
            <div>
                <h3>Basic Info</h3>
                <form onSubmit={this.submitHandler}>
                    First Name:
                    <input className="form-control" name="firstName" type="text" />
                    Last Name:
                    <input className="form-control" name="lastName" type="text" />
                    Email:
                    <input className="form-control" name="email" type="email" />
                    Website:
                    <input className="form-control" name="website" type="text" />
                    <button className="btn btn-success" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    firstName: state.basicInfo.firstName
})

const mapDispatchToProps = {
    putFirstName,
    putLastName,
    putEmail,
    putWebsite,
    nextPage
}

export default connect(null, mapDispatchToProps)(BasicInfo)