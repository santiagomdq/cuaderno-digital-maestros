var React = require('react');
var PropTypes = require('prop-types');

var ComunicacionItem = require('./ComunicacionItem');

class ListadoComunicaciones extends React.Component {

  constructor(props){
    super(props);
    this.archiveComunicacion = this.archiveComunicacion.bind(this);
  };

  archiveComunicacion(item) {
    var a = [];
    console.log(item);
    this.props.listado.map(function(obj, index){
      console.log('obj ', obj)
      if(obj.id !== item) {
        a.push(obj);
      }else{
        console.log('borro', obj.subject)
      }
    })
    console.log('resultante', a);
    this.props.callbackFromParent(a);
  };

  render() {
    console.log('props desde listado', this.props.listado);
    var listado;

    return (
      <div>
        <table className="table is-striped">
          <thead>
            <tr>
              <th>-</th>
              <th>Fecha</th>
              <th>Contacto</th>
              <th>Titulo</th>
              <th>Status</th>
              <th>Accion</th>
            </tr>

          </thead>
          <tbody>
              {
                 listado = this.props.listado.map((item) => {
                  if (((this.props.filtro.dest === '')||
                      (item.destinatario.includes(this.props.filtro.dest))) &&
                      ((this.props.filtro.subj === '')||
                      (item.subject.includes(this.props.filtro.subj)))) {
                  return (
                          <ComunicacionItem
                            key={item.id}
                            id={item.id}
                            subject={item.subject}
                            fecha={item.fecha.toDateString()}
                            destinatario={item.destinatario}
                            remitente={item.remitente}
                            status={item.status}
                            entrante={item.entrante}
                            callbackFromParent={this.archiveComunicacion}


                          />
                    )
                  }
              })}
          </tbody>
        </table>
      </div>
        )
    }
}

module.exports = ListadoComunicaciones;
