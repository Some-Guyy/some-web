import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

export default class CountdownTimer extends Component {
    state = {
        endDate: this.props.date,
        endDateTime: this.props.date.getTime(),
        now: NaN,
        distance: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN,
        secondsStayed: 0
    }

    commafyNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    timer = () => {
        this.setState({ now: new Date().getTime() })
        this.setState(prevState => {
            return {
                distance: prevState.endDateTime - prevState.now,
                days: this.commafyNumber(Math.floor(prevState.distance / (1000 * 60 * 60 * 24))),
                hours: this.commafyNumber(Math.floor(prevState.distance / (1000 * 60 * 60))),
                minutes: this.commafyNumber(Math.floor(prevState.distance / (1000 * 60))),
                seconds: this.commafyNumber(Math.floor(prevState.distance / 1000)),
                secondsStayed: prevState.secondsStayed + 1
            }
        })
        if (this.state.distance < 0) {
            clearInterval(this.intervalId);
        }
    }

    componentDidMount = () => {
        this.setState({ now: this.state.endDateTime - new Date().getTime() })
        this.intervalId = setInterval(this.timer, 1000);
    }
    componentWillUnmount = () => clearInterval(this.intervalId)

    render() {
        const { endDate, distance, days, hours, minutes, seconds, secondsStayed } = this.state;
        return (
            <React.Fragment>
                <div style={styleCountdownTimer}>
                    {distance < 0
                        ? (
                            <p className="colorAccent">Countdown Complete!</p>
                        ) : (secondsStayed < 2
                            ? (
                                <p>Loading countdown...</p>
                            ) : (
                                <div>
                                    {days} days<br />{hours} hours<br />{minutes} minutes<br />{seconds} seconds<br />
                                </div>
                            )
                        )}
                </div>
                <div style={styleCountdownInfo}>
                    <p>Countdown ends on {endDate.toString()}.</p>
                    <button className="colorSub colorBackAccent" style={styleButton} onClick={this.props.stopCountdown.bind(this)}>Change Countdown</button>
                </div>
            </React.Fragment>
        );
    }
}

const styleCountdownTimer = {
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
}

const styleCountdownInfo = {
    padding: '10px',
    textAlign: 'center'
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

CountdownTimer.propTypes = {
    date: PropTypes.object.isRequired
}
