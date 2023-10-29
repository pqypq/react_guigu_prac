import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = ()=> {
    // 获取用户输入（连续解构赋值）
    const {keyWordElement: {value: keyWord}} = this
    // 发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false, isLoading:true})
    // 发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功之后，通知App更新状态
        this.props.updateAppState({isLoading:false, users:response.data.items});
      },
      error => {
        // 请求失败之后，通知App更新状态
        this.props.updateAppState({isLoading:false, err: error});
      }
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
      </div>
    )
  }
}
