import React, { Component } from 'react'
import conn from "../store"
import {connect} from 'react-redux'
const add =(num)=>{
    return{
        type:"ADD",
        step:num
    }
}
class Class4 extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    
addHandle(){
    this.props.add(2)
}
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <div><button onClick={this.addHandle.bind(this)}>add</button></div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
    return(
        {
            count:state.count
        }
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        add:(num)=>dispatch(add(num))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Class4);