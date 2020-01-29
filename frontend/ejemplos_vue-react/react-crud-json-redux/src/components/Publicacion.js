import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarPublicacionAction } from '../redux/actions/publicacionesActions';

const Publicacion = ({ publicacion }) => {

    // Dispatch para ejecutar las acciones
    const dispatch = useDispatch();

    const confirmarEliminarPublicacion = id => {

        // Preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una publicacion eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Eliminado',
                    'Se eliminó correctamente',
                    'success'
                )
                dispatch(borrarPublicacionAction(id));
            }
        })
    }

    return (
        <tr key={publicacion.id}>
            <td><b>{publicacion.titulo}</b></td>
            {publicacion.tipo === "imagen" ?
                <td> <img className="responsive-img" height="450" width="500" src={publicacion.url} alt="Imagen" /> </td>
            :
                <td> <video className="responsive-video" height="450" width="500" src={publicacion.url} controls></video> </td>
            }
            <td className="acciones">
                <Link
                    to={`/publicaciones/editar/${publicacion.id}`}
                    className="btn btn-primary mr-2">
                    Editar
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarPublicacion(publicacion.id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default Publicacion;