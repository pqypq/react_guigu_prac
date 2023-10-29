import React, {Component} from 'react'
import hello from './index.module.css'

export default class Welcome extends Component {
    render() {
        return <h2 className={hello.title}>Welcome</h2>
    }
}