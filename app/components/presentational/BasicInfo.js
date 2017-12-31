import React from 'react';

class BasicInfo extends React.Component {
    render() {
        return (
            <div>
                <h3>Basic Info</h3>
                <form >
                    First name:<br />
                    <input type="text" name="firstname" value="Mickey" />
                    <br />
                    Last name:<br />
                    <input type="text" name="lastname" value="Mouse" />
                    <br />
                    email:<br />
                    <input type="text" name="firstname" value="Mickey" />

                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default BasicInfo