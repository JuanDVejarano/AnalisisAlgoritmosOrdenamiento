import "./Inputs.scss";

function Inputs() {
    return (
        <div className="form">
            <div className="input">
                <label htmlFor="cantidadArreglo">
                    Cantidad de valores del arrelo
                </label>
                <input type="text" id="cantidadArreglo" value={10000} />
            </div>
            <div className="input">
                <label htmlFor="intervalo">Intervalo toma de tiempo:</label>
                <input type="text" id="intervalo" value={1000} />
            </div>
            <button className="button">Generar Gráfica</button>
        </div>
    );
}

export default Inputs;
