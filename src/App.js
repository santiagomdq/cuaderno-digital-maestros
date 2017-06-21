import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';


var ListadoComunicaciones = require('./components/ListadoComunicaciones');
var FiltroBusqueda = require('./components/FiltroBusqueda');

class App extends Component {

  constructor(props) {
    super(props);
    var ahora = new Date();
    this.state = {
      ListadoC : [{
                  id: 1,
                  fecha: ahora,
                  entrante: false,
                  destinatario: 'all',
                  remitente: 'Rocio',
                  subject:"TEST Reunion de Padres",
                  comunicacion:'Sres Padres el proximo lunes a las 9:00hs habra reunion de padres, por favor concurrir en horario',
                  status:'new',
                  related:'0'
                  },
                  {
                   id: 2,
                   fecha: ahora,
                   entrante: false,
                   destinatario: 'Juana Morrone',
                   remitente: 'Rocio',
                   subject:"Evaluacion Conducta",
                   comunicacion:'Sres Padres solicito reunion para hablar de Juana',
                   status:'new',
                   related:'0'
                  },
                  {
                   id: 3,
                   fecha: ahora,
                   entrante: true,
                   destinatario: 'Rocio',
                   remitente: 'Juana Morrone',
                   subject:"RE: Evaluacion Conducta",
                   comunicacion:'Alli estare a las 9:00 hs.',
                   status:'new',
                   related:'2'
                 },
                 {
                  id: 4,
                  fecha: ahora,
                  entrante: false,
                  destinatario: 'all',
                  remitente: 'Rocio',
                  subject:"Acto Dia de la bandera",
                  comunicacion:'Sres Padres el proximo lunes acto, favor concurrir en horario',
                  status:'new',
                  related:'0'
                 }
               ],
      Destinatario : [ {}

      ],
      FiltroActual : {dest: '', subj: ''},

    };
    this.addComunicacion = this.addComunicacion.bind(this);

  };

  addComunicacion(e){
    e.preventDefault();
    var rand = Math.floor((Math.random() * 10000));
    var ahora = new Date();
    let a = this.state.ListadoC.slice(); //creates the clone of the state
    console.log('**** ',e.target.broadcast.checked);
    if (e.target.broadcast.checked){
      var newelement = {
        id: rand,
        subject: e.target.subject.value,
        fecha: ahora,
        status:'new',
        destinatario: 'all',
        comunicacion: e.target.comunicacion.value
      }
    } else {
      var newelement = {
        id: rand,
        subject: e.target.subject.value,
        fecha: ahora,
        status:'new',
        destinatario: e.target.destinatario.value,
        comunicacion: e.target.comunicacion.value
      }
    }
    a.push(newelement);
    this.setState({ListadoC: a});
    console.log('STATE nuevo', this.state.ListadoC);
    document.getElementById("addComunicacionForm").reset();
  };

  myListCallback = (dataFromChild) => {
    this.setState({ListadoC: dataFromChild});
  }

  myFilterCallback = (dataFromChild) => {
    console.log('filtro en el calback app ',dataFromChild);
    this.setState({FiltroActual: dataFromChild});
    console.log('estado despues del set ',this.state.FiltroActual);
  }

  render() {
    console.log('STATE nuevo afuera', this.state.ListadoC);
    console.log('Filtro nuevo afuera', this.state.FiltroActual);
    return (
      <div className="App">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item is-brand" href="#">
                <img src="./images/cclogo.jpg" alt="CC logo"/>
              </a>
            </div>
            <div className="nav-center">
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </a>
            </div>
            <span id="nav-toggle" className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div id='nav-menu' className="nav-right nav-menu">
              <a className="nav-item" href="#">
                Home
              </a>
              <a className="nav-item" href="#">
                Documentation
              </a>
              <a className="nav-item" href="#">
                Srta. Rocio Blabla / Desconectarse
              </a>
            </div>
          </nav>
        </div>
        <div className="container">
          <h1 className="title">
            Cuaderno Digital - Maestros
          </h1>
        </div>
        <br></br>
        <div className="container">
          <h2 className="subtitle">
            Busqueda de Comuninaciones
          </h2>
          <div className="box">
            <FiltroBusqueda
              filtro={this.state.FiltroActual}
              callbackFromParent={this.myFilterCallback}/>
          </div>
          <h2 className="subtitle">
            Comunicaciones
          </h2>
          <div className="box">
            <ListadoComunicaciones
              listado={this.state.ListadoC}
              callbackFromParent={this.myListCallback}
              filtro={this.state.FiltroActual}  />
          </div>
        </div>
        <br></br>
        <div className="container">
          <h2 className="subtitle">
            Redactar nueva comunicacion
          </h2>
          <form id='addComunicacionForm' onSubmit={this.addComunicacion} className='box'>
            <div className="field columns">
              <div className='column is-6'>
              <p className="control">
                <input id='destinatario' type='text' placeholder='autocomplete con los alumnos' className="input is-medium"/>
              </p>
              </div>
              <div className="field column is-6">
                <p className="control">
                  <label className="checkbox">
                    <input type='checkbox' name='broadcast'/>Enviar a Todos
                  </label>
                </p>
              </div>
            </div>
            <div className="field">
              <p className="control">
                <input id='subject' type='text' className="input is-medium" placeholder='Ingrese el Titulo de la Comunicacion'/>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea className="textarea is-medium" placeholder='Ingrese la Comunicacion' id='comunicacion' type='text' />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Enviar Comunicacion
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
