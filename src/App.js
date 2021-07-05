import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"
import "./App.css"
export default class App extends Component {
  state = {
    users: []
  }
  saveUsers = (userArr)=>{
    this.setState({users:userArr})
  }
  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers}/>
        <List users={this.state.users}/>
      </div>
    )
  }
}
