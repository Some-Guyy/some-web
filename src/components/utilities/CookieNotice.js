import React, { Component } from 'react';

import '../../App.css';

export default class CookieNotice extends Component {
    // Cookies
    setCookie = (cname, cvalue, cexpiryDays) => {
        var d = new Date();
        d.setTime(d.getTime() + (cexpiryDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    render() {
        return (
            <React.Fragment>
                {this.getCookie("cookienotice_consent") !== ""
                    ? (
                        <div className="disclaimer">
                            <span className="helper"></span>
                            <div>
                                <h2 style={{fontWeight: 'bold', color: ''}}></h2>
                                <p>
                                    This website was designed to provide helpful information by matching user queries with author publications.
                                    This website is not meant to be used, nor should it be used, as the one and only way to show conclusive evidence of author ranks.
                                    The search results from a query may not be 100% accurate, and we disclaim any liability in connection with the use of this information.
                    </p><br />
                                <p><input id="disclaimerCheckbox" type="checkbox" />By checking the box, I have read and understood the disclaimer above.</p>
                                <button id="disclaimerButton" className="colorText colorBackDominant" type="button" style={styleButton} disabled>Understood</button>
                            </div>
                        </div>
                    ) : (
                        <span></span>
                    )
                }
            </React.Fragment>
        );
    }
}

const styleButton = {
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px',
    fontFamily: 'Manjari',
    fontSize: '16px',
    cursor: 'pointer'
}

const styleButtonDisabled = {
    opacity: '0.5',
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px',
    fontFamily: 'Manjari',
    fontSize: '16px',
    cursor: 'not-allowed'
}