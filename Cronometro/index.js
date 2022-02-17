import React, { Component } from 'react'

import './index.css'

class Cronometro extends Component{

    constructor(props){
        super(props);
        this.state= {
            numero: 0,
            textoBotaoStart: 'Start'
        };

        this.timer = null;

        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start(){

        if( this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            this.setState({textoBotaoStart: 'Start'});
        }else{
            this.timer = setInterval( () => {
                let state = this.state;
                state.numero += 0.1;
    
                this.setState(state);
                this.setState({textoBotaoStart: 'Pause'});
    
            }, 100)
        }
    }

    clear(){
        if( this.timer === null){
            this.setState({numero: 0});
        }
    }

    render(){
        return(
            <div className='container'>
                <img className='img' src={require('./assets/cronometro.png')} />
                <a className='timer'>{this.state.numero.toFixed(1)}</a>

                <div className='areaBtn'>
                    <a className='botao' onClick={this.start}>{this.state.textoBotaoStart}</a>
                    <a className='botao' onClick={this.clear}>Clear</a>
                </div>
            </div>
        );
    }
}

export default Cronometro;