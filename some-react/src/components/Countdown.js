import React, { Component } from 'react';

class Countdown extends Component {
    state = {
        end_date: new Date("Feb 14, 2020 17:30:00").getTime(),
        now: 'none',
        distance: 'none',
        days: 'none',
        hours: 'none',
        minutes: 'none',
        seconds: 'none'
    }
    timer = () => {
        this.setState({ now: new Date().getTime() })
        this.setState({
            distance: this.state.end_date - this.state.now,
            days: Math.floor(this.state.distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(this.state.distance / (1000 * 60 * 60)),
            minutes: Math.floor(this.state.distance / (1000 * 60)),
            seconds: Math.floor(this.state.distance / 1000)
        })
        if (this.state.distance < 0) {
            clearInterval(this.intervalId);
        }
    }
    componentDidMount = () => {
        this.setState({ now: this.state.end_date - new Date().getTime() })
        this.setState({ distance: this.state.end_date - this.state.now })
        this.setState({
            days: Math.floor(this.state.distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(this.state.distance / (1000 * 60 * 60)),
            minutes: Math.floor(this.state.distance / (1000 * 60)),
            seconds: Math.floor(this.state.distance / 1000)
        })
        this.intervalId = setInterval(this.timer, 1000);
    }
    componentWillUnmount = () => { clearInterval(this.intervalId); }

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
    fontSize: '30px'
}

export default Countdown;