import React, { Component } from 'react'
import axios from "axios"
export default class Class5 extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataList:[]
        }
    }
    componentDidMount(){
        let url="https://www.fellow29.com/getData";
        axios.get(url).then((res)=>{
            this.setState({
                dataList:res.data.data
            })
        })
    }
  render() {
      let com =null;
      let nowList = this.state.dataList;
      com = nowList.map((item,index)=>{
          return(
              <li key={item.id}>
                <div>{item.name}</div>
                <div><img src={item.img} alt=""/></div>
                <div>{item.address}</div>
                <div>{item.zip}</div>
                <div>{item.idcard}</div>
              </li>
          )
      })
  

    return (
      <div>
        <ul style={{listStyle:"none"}}>
            {com}
        </ul>
      </div>
    )

}
}