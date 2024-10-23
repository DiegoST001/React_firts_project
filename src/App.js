import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { 
          codigo: 1,
          descripcion: 'coca-cola', 
          precio: 2.50 
        },{ 
          codigo: 2, 
          descripcion: 'inka-cola',
          precio: 2.20 
        },{ 
          codigo: 3, 
          descripcion: 'fanta', 
          precio: 1.70 
        },
      ],
    };
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div className='bg-dark text-white w-100 h-100 min-vh-100 p-4 d-flex flex-column'>
          <div className="mt-4">
          <h1>Lista de Artículos</h1>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th className='bg-dark text-white'>Código</th>
                <th className='bg-dark text-white'>Descripción</th>
                <th className='bg-dark text-white'>Precio</th>
                <th className='bg-dark text-white'>Borrar?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.articulos.map(elemento => (
                <tr key={elemento.codigo}>
                  <td className='bg-dark text-white'>{elemento.codigo}</td>
                  <td className='bg-dark text-white'>{elemento.descripcion}</td>
                  <td className='bg-dark text-white'>{elemento.precio.toFixed(2)}</td>
                  <td className='bg-dark text-white'>
                    <button className="btn btn-danger" onClick={() => this.borrar(elemento.codigo)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div>
    );
  }

  borrar(cod) {
    const temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({
      articulos: temp,
    });
  }
}

export default App;
