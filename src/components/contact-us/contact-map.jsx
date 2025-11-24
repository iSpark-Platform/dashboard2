import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.7697214843847!2d80.19427197454839!3d13.089231712289408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526537b4dcf757%3A0x31f355957ee81a01!2siSpark%20Learning%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1762325397876!5m2!1sen!2sin" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactMap;