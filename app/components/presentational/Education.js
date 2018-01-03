import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Education extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Education</h3>
                <form>
                    School:
                    <input className="form-control" type="text" value = {this.props.school}/>
                    <Link to="/location"><button className="btn btn-secondary">Back</button></Link>
                    <Link to="/summary"><button className="btn btn-success">Next</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        school: state.school
    }
}

export default connect(mapStateToProps, null)(Education)