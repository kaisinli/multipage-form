import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class BasicInfo extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Basic Info</h3>
                <form>
                    First Name:
                    <input className="form-control" type="text" value = {this.props.firstName}/>
                    Last Name:
                    <input className="form-control" type="text" value = {this.props.lastName}/>
                    Email:
                    <input className="form-control" type="email" value = {this.props.email}/>
                    Website:
                    <input className="form-control" type="text" value = {this.props.website}/>
                    <Link to="/"><button className="btn btn-secondary">Back</button></Link>
                    <Link to="/location"><button className="btn btn-success">Next</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        website: state.webpage
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo)