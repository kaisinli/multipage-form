import React from 'react';
import { connect } from 'react-redux';
import {putSchool} from '../../reducers/educationReducer';
import { nextPage, previousPage } from '../../reducers/currentPageReducer';

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this);
        this.onBackClickHandler = this.onBackClickHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault()
        let target = event.target;
        this.props.putSchool(target.school1.value);
        target.school2.value && this.props.putSchool(target.school2.value);
        this.props.nextPage()
    }

    onBackClickHandler() {
        this.props.previousPage()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Education</h3>
                <form onSubmit = {this.submitHandler}>
                    School 1:
                    <input name = "school1" className="form-control" type="text"/>

                    School 2:
                    <input name = "school2" className="form-control" type="text"/>

                    <button onClick={this.onBackClickHandler} className="btn btn-secondary">Back</button>
                    <button className="btn btn-success" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const mapPropsToProps = {
    putSchool,
    nextPage
}

export default connect(null, mapPropsToProps)(Education)