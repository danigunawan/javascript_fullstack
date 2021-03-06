import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {

    //props de App
    const {guardarGasto, guardarCrearGasto} = props;       

    // states
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);
    
    // Cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
            guardarError(true);
            return;
        }

        // construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }       

        // eliminar alerta
        guardarError(false)

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');        

    }    

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega los gastos aquí</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o presupuesto no válido' /> : null}
            <div className="campo">
                <label>Concepto gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Tacos"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}                    
                />
            </div>
            <div className="campo">
                <label>Importe gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}                    
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar" />
        </form>
    )
}
export default Formulario;