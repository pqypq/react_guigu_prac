import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = ()=> {
    // 获取用户输入（连续解构赋值）
    const {keyWordElement: {value: keyWord}} = this
    // 发送请求前通知List更新状态
    PubSub.publish('github', {isFirst:false, isLoading:true})
    
    //#region 发送网络请求---使用axios发送
    /*axios.get(`api1/search/users2?q=${keyWord}`).then(
      response => {
        // 请求成功之后，通知App更新状态
        PubSub.publish('github', {isLoading:false, users:response.data.items});
      },
      error => {
        // 请求失败之后，通知App更新状态
        PubSub.publish('github', {isLoading:false, err: error.message});
      }
    )*/
    //#endregion
    // 发送网络请求---使用fetch发送
    fetch(`api1/search/users2?q=${keyWord}`).then(
      response => {
        // 返回是否与服务器成功建立联系
        console.log('联系服务器成功：', response.json())
      },
      error => {
        // 请求成功之后，通知App更新状态
        console.log('联系服务器失败：', error)
      },
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
