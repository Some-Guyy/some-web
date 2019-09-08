import React, { Component } from 'react';

export default class Countdown extends Component {
    state = {
        end_date: new Date(Date.UTC(2020, 1, 14, 9, 30)).getTime(),
        now: NaN,
        distance: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }

    commafyNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    timer = () => {
        this.setState({ now: new Date().getTime() })
        this.setState({
            distance: this.state.end_date - this.state.now,
            days: this.commafyNumber(Math.floor(this.state.distance / (1000 * 60 * 60 * 24))),
            hours: this.commafyNumber(Math.floor(this.state.distance / (1000 * 60 * 60))),
            minutes: this.commafyNumber(Math.floor(this.state.distance / (1000 * 60))),
            seconds: this.commafyNumber(Math.floor(this.state.distance / 1000))
        })
        if (this.state.distance < 0) {
            clearInterval(this.intervalId);
        }
    }

    componentDidMount = () => {
        this.setState({ now: this.state.end_date - new Date().getTime() })
        this.setState({ distance: this.state.end_date - this.state.now })
        this.intervalId = setInterval(this.timer, 1000);
    }
    componentWillUnmount = () => clearInterval(this.intervalId)

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div>
                {isNaN(days) ? (<p style={styleCountdown}>Loading countdown...</p>) : (
                    <div style={styleCountdown}>
                        {days} days<br />{hours} hours<br />{minutes} minutes<br />{seconds} seconds
                    </div>
                )}
            </div>
        );
    }
}

const styleCountdown = {
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#fff'
}