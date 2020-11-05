import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';

import './App.css';
import {base,db} from './Base.js';
import Button from '@material-ui/core/Button';
import CreateButton from '../components/CreateButton';

class App extends Component{
  constructor(){
    super();
    this.state={
      items: [],
      searchfield: '',
      inputmsg: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  onMsgChange = (event) => {
    this.setState({inputmsg: event.target.value})
  }


  generateLog= () =>{ 
    // Changing state 

    
    
    var immediatelyAvailableReference = base.push('messages', {
      data: {message: `msdasdsad ${this.state.inputmsg} sasd`,
      reason: 'reason1' },
      then(err){
        if(!err){
         
        }
      }
    });
    //available immediately, you don't have to wait for the callback to be called
    var generatedKey = immediatelyAvailableReference.key;
    this.setState({inputmsg: ''});
  } 
  

  componentDidMount(){
   
      
   
        base.syncState(`messages`, {
          context: this,
          state: 'items',
          asArray: true
        });
  }


  render(){
    const {items, searchfield,inputmsg} =this.state;
    const filteredItems = this.state.items.filter(items=>{
      return (items.message.toString().toLowerCase().includes(searchfield.toLowerCase()))
    });


   
    // if(!items.length){
    //   return <h1>Loading...</h1>
    // }

    return (
      <div className='tc'>

        <CreateButton addLog={this.generateLog} msg={inputmsg} msgChange={this.onMsgChange.bind(this)}  />
          
        <h1 className='f1'> FWLog </h1>
        
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList items={filteredItems.splice(0,30)} />
        </Scroll>
      </div>
    );
  }



}

export default App;