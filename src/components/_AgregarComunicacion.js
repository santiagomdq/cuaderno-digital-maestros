var React = require('react');
var PropTypes = require('prop-types');


class AgregarComunicacion extends React.Component {

  render() {
    return (
      <div>
        <form className='column' onSubmit={this.handleSubmit}>
          <input id='destinatario' type='text' placeholder='autocomplete con los alumnos' disabled/>
          <label>
            <input type="checkbox"
              name='broadcast'
              checked='true'
              readOnly='true'
            />
            Enviar a Todo el Curso
          </label>
          <br></br>
          <input id='subject' type='text' size='52' placeholder='Ingrese el Titulo de la Comunicacion'/><br></br>
          <textarea id='subject' rows="4" cols="50" type='text' placeholder='Ingrese la Comunicacion'/><br></br>
          <button className='button' type='submit'> Enviar Comunicacion</button>
        </form>

      </div>
    )
    }

}

module.exports = AgregarComunicacion;
