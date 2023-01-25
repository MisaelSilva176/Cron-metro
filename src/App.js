import { Component } from 'react';
import './style.css'; 
class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      numero : 0,
      botao: 'VAI'
    };
    this.tempo =null;
    this.vai= this.vai.bind(this);
    this.zerar=this.zerar.bind(this); 
  }
  vai(){
    let state = this.state;
    if(this.tempo !== null){
      clearInterval(this.tempo);
      this.tempo=null;
      this.state.botao='VAI';
    }else{
      this.tempo= setInterval(()=>{
        let state = this.state;
        state.numero += 0.01;
        this.setState(state);
    },10)
    state.botao='PAUSAR';  
  }
this.setState(state);
}
  zerar(){
    if(this.tempo !== null){
      clearInterval(this.tempo);
      this.tempo=null;
    }
    let state=this.state;
    state.numero=0;
    state.botao='VAI';
    this.setState(state);

  }

  render(){
  return (
    <div className='container' >
      <img src={require('./assets/cronometro.png')}className='image'/> 
      <a className='timer'>{this.state.numero.toFixed(2)}</a>
      <div className='areaBtn'>
        <a className='botao' onClick={this.vai}>{this.state.botao}</a> <br/>
        <a className='botao'onClick={this.zerar}>Zerar</a>
      </div>
    </div>
  );
  }
}

export default App;
