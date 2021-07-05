import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    keyWordContainer = React.createRef()

    search = (e) => {
        e.preventDefault();
        //获取数据
        const {value} = this.keyWordContainer.current;
        //校验数据
        if(!value.trim())alert("输入不能为空");
        //发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then((response)=>{
                console.log(response.data);
                this.props.saveUsers(response.data.items)
             },err => {
                console.log(err);
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
