import React from 'react';
import {Link} from 'react-router';

class Begin extends React.Component {
    render() {
        return (
            <div>
                <Link to="/basicinfo"><button className="btn btn-info">Start</button></Link>
            </div>
        )
    }
}

export default Begin