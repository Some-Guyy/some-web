import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';

export default class Countdown extends Component {
    state = {
        date: NaN,
        time: NaN,
        endDate: null
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

    handleDateChange = (event) => this.setState({ date: event.target.value })
    handleTimeChange = (event) => this.setState({ time: event.target.value })
    launchCountdown = () => {
        const endDate = new Date(`${this.state.date} ${this.state.time}`);
        this.setCookie("date", endDate, 365);
        this.setState({ endDate });
    }

    stopCountdown = () => this.setState({ endDate: null })

    componentDidMount = () => {
        if (this.getCookie("date") !== "") {
            this.setState({ endDate: new Date(this.getCookie("date")) })
        }
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.endDate
                    ? (
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <input type="date" onChange={this.handleDateChange} min={new Date().toISOString().split('T')[0]} />
                            <input type="time" onChange={this.handleTimeChange} /><br />
                            <button style={!this.state.date || !this.state.time ? styleButtonDisabled : styleButton} disabled={!this.state.date || !this.state.time} onClick={this.launchCountdown}>Launch Countdown</button>
                            <p>Did you accidentally stop the countdown? Just refresh the page to go back to it!</p>
                        </div>
                    ) : (
                        <CountdownTimer date={this.state.endDate} stopCountdown={this.stopCountdown} />
                    )
                }
            </React.Fragment>
        )
    }
}

const styleButton = {
    backgroundColor: '#3dd465',
    color: '#fff',
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
    backgroundColor: '#3dd465',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px',
    fontFamily: 'Manjari',
    fontSize: '16px'
}