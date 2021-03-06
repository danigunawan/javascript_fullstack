import React, { Component } from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'
import PropTypes from 'prop-types'

class MostrarLibro extends Component {
    state = {}
    render() {
        // extraer libro
        const {libro}=this.props
        if (!libro) return <Spinner />

        //boton para solicitar libro
        let btnPrestamo;
        if ((libro.existencia - libro.prestados.length)>0) {
            btnPrestamo = <Link to={`/libros/prestamo/${libro.id}`} className="btn btn-success">Solicitar prestamo</Link>
        } else {
            btnPrestamo = null
        }

        return (
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Link to="/" className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Regresar a listado
                </Link>
                </div>
                <div className="col-md-6">
                    <Link to={`/libros/editar/${libro.id}`} className="btn btn-primary float-right">
                        <i className="fas fa-pencil-alt"></i> Editar
                </Link>
                </div>

                <hr className="mx-5 w-100" />

                <div className="col-12">
                    <h2 className="mb-4"> {libro.titulo} </h2>

                    <p>
                        <span className="font-weight-bold"> ISBN: </span> {''} {libro.isbn}
                    </p>
                    <p>
                        <span className="font-weight-bold"> Editorial: </span> {''} {libro.editorial}
                    </p>
                    <p>
                        <span className="font-weight-bold"> Existencia: </span> {''} {libro.existencia}
                    </p>
                    <p>
                        <span className="font-weight-bold"> Disponibles: </span> {''} {libro.existencia - libro.prestados.length}
                    </p>
                    {btnPrestamo}
                </div>
            </div>
        )
    }
}

MostrarLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [{ collection: 'libros', storeAs: 'libro', doc: props.match.params.id}]),
    connect(({firestore: {ordered}}, props)=>({
        libro: ordered.libro && ordered.libro[0]
    }))
)(MostrarLibro)