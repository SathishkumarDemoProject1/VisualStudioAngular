import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class InnerDiv extends Component {
  constructor(){
    super();
    this.state={
      editable:false
    }
  }
  edit(){
    this.setState({editable:true})
  }
  save(){
    this.setState({editable:false})
    this.props.updatefun(this.refs.todoMessage.value,this.props.index)
  }
  remove(){
    this.props.removefun(this.props.index)
  }
  cancel(){
    alert("Cancel")
  }
  editTodo(){
    return(<div className="jumbotron container form-group col-md-6">
      <input type="text" ref="todoMessage" className="form-control"  defaultValue={this.props.children}></input>
      <button className="btn btn-success" onClick={this.save.bind(this)}>Save</button>
      <button className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel</button>
    </div>)
  }
  normalTodo(){
    return(<div className="jumbotron container form-group col-md-6">
      <input ref="todoMessage" className="form-control" disabled value={this.props.children}></input>
      <button className="btn btn-danger" onClick={this.edit.bind(this)}>Edit</button>
      <button className="btn btn-default" onClick={this.remove.bind(this)}>Remove</button>
    </div>)
  }
  render() {
      if(this.state.editable){
        return this.editTodo()
      }else{
        return this.normalTodo()
      }
  }
}

class App extends Component {
constructor(){
  super();
  this.state={
    comment:["hai","hello","welcome"]
  }
}

update(value,i){
  let comment=this.state.comment;
  comment[i]=value;
  this.setState({comment:comment})
}

remove(i){
  console.log(i)
  let comment=this.state.comment;
  comment.splice(i,1);
  this.setState({comment:comment})
}
render(){
  return(
    this.state.comment.map((value,i)=>
    <div>
      {value}
      <InnerDiv key={i} index={i} updatefun={this.update.bind(this)} removefun={this.remove.bind(this)}>{value}</InnerDiv>
    </div>))
}
}

export default App;
