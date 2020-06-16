import React,{Component} from 'react';
import Radium from 'radium';
import './App.css';
import {Person} from './Person/Person';
import {Validation} from './Validation/Validation';
class App extends Component {

  state = {
    word:"",
    persons:[
      {id:"a;ld",name:"Binay",age:18,wordLength:0,size:"Too short"},
      {id:"a;dj",name:"Mosh",age:26,wordLength:0,size:"Too short"},
      {id:"ie;aj",name:"Qazi",age:24,wordLength:0,size:"Too short"},
      {id:"wois",name:"Telusko",age:30,wordLength:0,size:"Too short"},
    ],
    showContent:false,
    
  }

  showTextHandeler = (e) => {
    console.log(e.target.value)

    this.setState({
      word:e.target.value,
    })
  }

  updateState = (name,age) => {
    let newPerson = {name:name,age:age};
    let newState = [newPerson,...this.state.persons];

    this.setState({
      persons:newState,
    })
  }

  getData = (e) => {
    let age = document.getElementById("age");
    let name = document.getElementById("name")

    this.updateState(name.value,age.value);
  }

  deleteHandeler = (person,index) => {
    let oldState = [...this.state.persons];
    oldState.splice(index,1);

    this.setState({
      persons:oldState,
    })
  }

  changeContentHandler = (e,index) => {
    
    let getStateContent = {...this.state.persons[index]};
    getStateContent.name = e.target.value;
    
    let persons = [...this.state.persons];
    persons[index] = getStateContent;
    //change word length
    let newLength = e.target.value.length;
    persons[index].wordLength = newLength;
    //Size
    let newSize;
    if(newLength > 5) {
      newSize = "Too long enough";
      persons[index].size = newSize;
      
    }else {
      persons[index].size = "Too short";
    }


    this.setState({
      persons:persons,
      
    })
  }

  toggleContent = () => {
    let contentState = this.state.showContent;
    console.log(contentState)
    let newState = !contentState;
    console.log(newState)
    this.setState({showContent:newState})
  }
  

  render() {
    let style = {
      border:"1px solid #eee",
      boxShadow:"0 2px 3px #ccc",
      marginBottom:"1rem",
      margin:"2rem",
      padding:"1rem",
    }

    let content = (<div>Click the button</div>);
      if(this.state.showContent) {
        content = (
              <div>
                {this.state.persons.map((person,index) => {
                  return (
                      <div style={style}>
                        <Person 
                        name={person.name} 
                        age={person.age} 
                        del={() => this.deleteHandeler(person,index)} 
                        changed={(e) => this.changeContentHandler(e,index)}
                        key={person.id}  
                        />
                        <Validation contentLength = {person.wordLength} size={person.size}/>
                      </div>
                    )
                })}
              </div>
        )
      }
    return (
      <div>
        <input type="text" placeholder="Name" id="name"/><br />
        <input type="number" placeholder="Age" id="age" /><br />
        <button onClick={this.getData}>Add</button>
        {content}
        <button onClick={this.toggleContent}>{this.state.showContent?"Hide":"Show"}</button>
                
      </div>
      )
  }
}
export default App;
