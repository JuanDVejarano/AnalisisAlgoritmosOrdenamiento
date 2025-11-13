import "./Inputs.scss";
import React from "react";

function Inputs() {
    const [cantidadArreglo, setCantidadArreglo] = React.useState(10000);
    const [intervalo, setIntervalo] = React.useState(1000);
    function handleChange() {
        // Lógica para manejar el cambio en el input
    }
    return (
        <div className="form">
            <div className="input">
                <label htmlFor="cantidadArreglo">
                    Cantidad de valores del arrelo
                </label>
                <input
                    type="number"
                    id="cantidadArreglo"
                    value={cantidadArreglo}
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <label htmlFor="intervalo">Intervalo toma de tiempo:</label>
                <input
                    type="number"
                    id="intervalo"
                    value={intervalo}
                    onChange={handleChange}
                />
            </div>
            <button className="button">Generar Gráfica</button>
        </div>
    );
}

export default Inputs;
