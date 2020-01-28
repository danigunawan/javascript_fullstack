import React, {useState} from 'react'
// Redux
import { crearNuevaPublicacionAction } from '../redux/actions/publicacionesActions';
import { validarFormularioAction, validacionExito, validacionError } from '../redux/actions/validacionActions';
import { useDispatch } from 'react-redux';

const NuevaPublicacion = () => {

    // sate
    const [titulo, guardarTitulo] = useState('');
    const [url, guardarURL] = useState('');
    
    // Crear nuevo publicacion 
    const dispatch = useDispatch();
    const agregarPublicacion = (publicacion) => dispatch(crearNuevaPublicacionAction(publicacion));
    const validarFormulario = () => dispatch(validarFormularioAction());
    const exitoValidacion = () => dispatch(validacionExito());
    const errorValidacion = () => dispatch(validacionError());        

    // Agregar publicacion
    const submitNuevaPublicacion = e => {
        e.preventDefault();

        // Validar el formulario
        validarFormulario();
        if (titulo.trim() === '' || url.trim() === '') {
            errorValidacion();
            return;
        }        

        // Si pasa la validación
        exitoValidacion();

        // crear publicacion
        agregarPublicacion({
            titulo, url
        });        

        // redireccionar

    }    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar publicación</h2>
                        <form onSubmit={submitNuevaPublicacion}>
                            <div className="form-group">
                                <label>Titulo contenido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo contenido"
                                    value={titulo}
                                    onChange={e => guardarTitulo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>URL video/imagen de API Graph</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Video o imagen de API Graph"
                                    value={url}
                                    onChange={e => guardarURL(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevaPublicacion