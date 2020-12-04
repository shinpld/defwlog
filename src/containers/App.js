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
import Container from '@material-ui/core/Container';
import FilterList from '../components/FilterList';
import SearchBar from '../components/SearchBar';

class App extends Component{
  constructor(){
    super();
    this.popItem = this.popItem.bind(this);
    this.state={
      items: [],
      searchfield: '',
      inputmsg: '',
      inputCircuit:'',
      searchType:'',
      inputpno:'',
      page:''
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
    const {items, searchfield,inputmsg,inputCircuit,inputpno} =this.state;
    const filteredItems = this.state.items.filter(items=>{
      return (items.message.toString().toLowerCase().includes(searchfield.toLowerCase())
              &&items.circuit.toString().toLowerCase().includes(inputCircuit.toLowerCase())
              &&items.type.toString().toLowerCase().includes(inputpno.toLowerCase())
              )
    });
    

   
    if(!items.length){
      return <h1 className='black'>Loading...</h1>
    }

    return (
      <div >
    
        <Menubar  />

       
          
            
          <div className="dt-ns dt--fixed-ns bg-black-10 flex">
            <div className="fl w-20 pa2 ">
            <SearchBox searchChange={this.onSearchChange}/>
            </div>
            <SearchBar selectedCircuit = {this.inputCircuit} circuitChange = {this.onCircuitChange}/>
            
          
          </div>
   
 

        

       
        <Container maxWidth="80%">
        <Scroll className="pv2">
          <CardList items={filteredItems} />
        </Scroll>
        </Container>
        

      
      </div>
    );
  }



}

export default App;