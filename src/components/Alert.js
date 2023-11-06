import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
    return (
        <div style={alertStyle}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.msg}</strong>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            }
        </div>
    )
}

const alertStyle = {
    position: "absolute",
    top: "5%",
    right: "5px",
    zIndex: "1000",
    width: "250px", // Set the width as per your preference
    margin: "0",
    padding: "10px",
}

Alert.defaultProps = {
    alert: {
        type: "success",
        msg: ""
    }
}

Alert.propTypes = {
    alert: PropTypes.shape({
        msg: PropTypes.string.isRequired
    })
}
