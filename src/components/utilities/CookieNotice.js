import React, { Component } from 'react';

import '../../App.css';

export default class CookieNotice extends Component {
    state = {
        checked: false,
        consent: false
    }

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

    handleCheckboxChange = () => this.setState(prevState => { return { checked: !prevState.checked } })
    consent = () => {
        this.setCookie("cookienotice_consent", 'true', 365);
        this.setState({ consent: true });
    }

    componentDidMount = () => {
        if (this.getCookie("cookienotice_consent") === 'true') {
            this.setState({ consent: true });
        }
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.consent
                    ? (
                        <div className="disclaimer">
                            <span className="helper"></span>
                            <div>
                                <h1 className="colorAccent">Notice</h1>
                                <p>
                                    This site uses cookies to provide you with a greater user experience by saving your preferences for certain apps. These apps can be identified with their italicized 'Note' text placed at the bottom of the app.
                                </p><br />
                                <p style={{ fontSize: '14px', fontStyle: 'italic' }}><input id="checkboxConsent" className="css-checkbox" type="checkbox" onChange={this.handleCheckboxChange} /><label htmlFor="checkboxConsent" className="css-label dark-check-green"></label>By checking the box, I consent to the use of cookies.</p>
                                <button className="colorSub colorBackAccent" type="button" style={!this.state.checked ? styleButtonDisabled : styleButton} disabled={!this.state.checked} onClick={this.consent}>Consent</button>
                            </div>
                        </div>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )
                }
            </React.Fragment>
        );
    }
}

const styleButton = {
    border: '1px solid',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px',
    fontFamily: 'Manjari',
    fontSize: '16px',
    cursor: 'pointer'
}

const styleButtonDisabled = {
    opacity: '0.5',
    border: '1px solid',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px',
    fontFamily: 'Manjari',
    fontSize: '16px',
    cursor: 'not-allowed'
}