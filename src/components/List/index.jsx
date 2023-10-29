import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="row">
            {
                this.props.users.map((userObj)=>{
                    return (
                        <div key={userObj.id} className="card">
                            <a rel="noopener noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="head_avater" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
