var React = require('react');
var PropTypes = require('prop-types');

//deberia ser solo de renderizado de la vista

class ComunicacionItem extends React.Component {
  archiveComunicacion(item) {
    console.log('Solo llama al calback', item);
    this.props.callbackFromParent(item);
  };


  render() {
    var orinetacion = '';
    var contacto = '';
    if (this.props.entrante) {
        orinetacion = '<===';
        contacto = this.props.remitente;

      } else {
        orinetacion = '===>';
        contacto = this.props.destinatario;
      }
    return (
        <tr>
          <td width='50px'>{orinetacion }
          </td>
          <td>{this.props.fecha}</td>
          <td>{contacto}</td>
          <td>{this.props.subject}</td>
          <td>{this.props.status}</td>
          <td>
            <button type="submit" onClick={() => { this.archiveComunicacion(this.props.id)}}>VER</button>|
            <button type="submit" onClick={() => { this.archiveComunicacion(this.props.id)}}>Hide</button>
          </td>
        </tr>
    )
    }
}

module.exports = ComunicacionItem;
