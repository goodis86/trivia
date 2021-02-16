import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 5,
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

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        console.log(this.state);
        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>                              // return value to our parent component , run compareAnswer and nextQuesiton methods, reset timer !!!
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}