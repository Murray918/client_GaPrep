import React from 'react'
import { Component } from 'react'

export default class Msg extends Component {

    render() {
        if (this.props.msg) {
            console.log(this)
            return (
               <h1>{this.props.msg}</h1>
            )
        }
        console.log(this.props)
        return <h1>...Loading</h1>
    }
}