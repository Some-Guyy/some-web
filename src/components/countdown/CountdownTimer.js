import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountdownTimer extends Component {
    state = {
        endDate: this.props.date.getTime(),
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
            distance: this.state.endDate - this.state.now,
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
        this.setState({ now: this.state.endDate - new Date().getTime() })
        this.setState({ distance: this.state.endDate - this.state.now })
        this.intervalId = setInterval(this.timer, 1000);
    }
    componentWillUnmount = () => clearInterval(this.intervalId)

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div style={styleCountdown}>
                {isNaN(days)
                    ? (
                        <p>Loading countdown...</p>
                    ) : (
                        <div>
                            {days} days<br />{hours} hours<br />{minutes} minutes<br />{seconds} seconds<br />
                        </div>
                    )
                }
                <button style={styleButton} onClick={this.props.stopCountdown.bind(this)}>Change Countdown</button>
            </div>
        );
    }
}

const styleCountdown = {
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
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

CountdownTimer.propTypes = {
    date: PropTypes.object.isRequired
}