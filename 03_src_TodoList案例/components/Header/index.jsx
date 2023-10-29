import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import "./index.css"

export default class Header extends Component {

  // 对接收的props进行：类型，必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    // 解构赋值，获取keyCode和target
    const {keyCode, target} = event
    // keycode 13 refer to enter button
    if (keyCode !== 13) return
    // 添加的todo名字不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    // 准备一个todo对象
    const todoObj = {id:nanoid(), name:target.value, done:false}

    // 将todoObj传递给todoApp
    this.props.addTodo(todoObj)

    // 清空输入窗口
    target.value = ""
  }

  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
