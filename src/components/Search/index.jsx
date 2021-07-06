import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    keyWordContainer = React.createRef()

    search = (e) => {
        e.preventDefault();
        //获取数据
        const {value} = this.keyWordContainer.current;
        //校验数据
        if(!value.trim())alert("输入不能为空");
        PubSub.publish("updateListState", { isFirst: false, isLoading: true })
        //发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then((response)=>{
                const {items} = response.data;
                PubSub.publish("updateListState", { users: items, isLoading: false })
            }, err => {
                PubSub.publish("updateListState", { isLoading: false, errorMsg: err.message })
             })
    }

    render() {
        return (
            <div>
                <h1>
                    github用户搜索
                </h1>
                <form>
                    <div className="form-group">
                        <input type="text" ref={this.keyWordContainer} className="form-control" placeholder="请输入关键词" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.search}>搜索</button>
                    </div>
                </form>
            </div>
        )
    }
}
