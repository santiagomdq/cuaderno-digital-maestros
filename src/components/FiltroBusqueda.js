var React = require('react');
var PropTypes = require('prop-types');


// ver los Hide
// testear filtro por contacto y no por destinatario, para las comunicaciones entrantes.


class FiltroBusqueda extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //       internalFilter : [{dest: '', subj: ''}],
    //
    // };

    this.filtrarComunicaciones = this.filtrarComunicaciones.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  };

  filtrarComunicaciones(e){
    e.preventDefault();
    var obj = {dest: e.target.dest.value, subj: e.target.subj.value};
    console.log('addfilter ***' ,obj);
    this.props.callbackFromParent(obj);
  };

  resetFilter(e){
    document.getElementById("filterForm").reset();
    var obj = {dest: '', subj: ''};
    console.log('reset ***' ,obj);
    this.props.callbackFromParent(obj);
  };

  render() {
    return (
      <div>
        <form id='filterForm' onSubmit={this.filtrarComunicaciones}>
          <div className='rows box'>
            <div className='field is-horizontal columns is-mobile'>
              <div className='field-label column is-5 is-offset-1' >
                <p className="control">
                  <input id='dest' placeholder="Ingrese Destinatario" className="input "></input>
                </p>
              </div>
              <div className='field-body column is-5'>
                <p className='control'>
                  <input id='subj' placeholder="Ingrese Subject" className="input "></input>
                </p>
              </div>
            </div>
          </div>
          <div className='rows '>
            <div className='field is-horizontal columns is-mobile'>
              <div className='column field-label is-4 is-offset-1'>
                <button type="submit" className='button is-primary '>Buscar</button>
              </div>
              <div className='column is-4 is-4 is-offset-1 field-body'>
                <button className='button is-primary ' onClick={() => { this.resetFilter() }}>Clear</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
    }
}

module.exports = FiltroBusqueda;
