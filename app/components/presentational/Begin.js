import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { nextPage } from '../../reducers/currentPageReducer'

class Begin extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.props.nextPage()
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="btn btn-info">Start</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    nextPage
}

export default connect(null, mapDispatchToProps)(Begin)