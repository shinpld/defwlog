import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';

import './App.css';
import {base,db} from './Base.js';
import Button from '@material-ui/core/Button';
import CreateButton from '../components/CreateButton';
import Grid from '@material-ui/core/Grid';
import Menubar from '../components/Menubar';

class App extends Component{
  constructor(){
    super();
    this.popItem = this.popItem.bind(this);
    this.state={
      items: [],
      searchfield: '',
      inputmsg: '',
      inputCircuit:''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  onMsgChange = (event) => {
    this.setState({inputmsg: event.target.value})
  }
  onCircuitChange = (event) => {
    this.setState({inputCircuit: event.target.value})
  }

  clearinput = () => {
    this.setState({inputmsg: '',inputCircuit:''});
  }

  popItem = () => {
    const ky = "-MLHT-j3Ry1L7NOdcxmt"
    base.update(`messages/${ky}`, {
      data: { message: 'Newwwww',circuit: 'User',reason: 'r2' },
      then(err) {
        if (!err) {
        
        }
      }
    });
  }

  



  componentDidMount(){
   
      
   
        base.syncState(`messages`, {
          context: this,
          state: 'items',
          asArray: true
        });
  }


  render(){
    const {items, searchfield,inputmsg,inputCircuit} =this.state;
    const filteredItems = this.state.items.filter(items=>{
      return (items.message.toString().toLowerCase().includes(searchfield.toLowerCase()))
    });


   
    // if(!items.length){
    //   return <h1>Loading...</h1>
    // }

    return (
      <div >
      
            
        <Menubar searchCh={this.onSearchChange} />

        <div>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
 

        

       
        
        <Scroll className="pv2">
          <CardList items={filteredItems} />
        </Scroll>

      
      </div>
    );
  }



}

export default App;