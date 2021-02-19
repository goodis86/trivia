import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
    this.state = {
        minutes: 0,
        seconds: 10,
    }
    this.trigger = this.trigger.bind(this);
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {                            // TIMER DOESN'T RESET WHEN I CLICK ONE OF THE ANSWERS!!! NEED TO FIX IT AND TAKE CARE OF ERRORS IN CONSOLE!
        clearInterval(this.myInterval)
    }

    componentDidUpdate () {
        // this.props.onTimeOut();
    }

    trigger() {
        this.setState({seconds: 10})
        this.props.onTimeOut();                 // populate our props and trigger methods in game component!
    }

    render() {

        console.log(this.state);
        const { minutes, seconds } = this.state;
        if (minutes === 0 && seconds === 0) {
           this.trigger();
        }
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>busted</h1>                        
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}