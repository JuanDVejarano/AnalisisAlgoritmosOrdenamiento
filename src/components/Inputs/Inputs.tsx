import "./Inputs.scss";
import React, { useEffect, useState } from "react";

interface InputsProps {
    cantidadArreglo: number;
    intervalo: number;
    onGenerate: (cantidad: number, intervalo: number) => void;
}

function Inputs({ cantidadArreglo, intervalo, onGenerate }: InputsProps) {
    const [localCantidad, setLocalCantidad] = useState<number>(cantidadArreglo);
    const [localIntervalo, setLocalIntervalo] = useState<number>(intervalo);

    useEffect(() => {
        setLocalCantidad(cantidadArreglo);
        setLocalIntervalo(intervalo);
    }, [cantidadArreglo, intervalo]);
    return (
        <div className="form">
            <div className="input">
                <label htmlFor="cantidadArreglo">
                    Cantidad de valores del arrelo
                </label>
                <input
                    type="number"
                    id="cantidadArreglo"
                    value={localCantidad}
                    min={1}
                    onChange={(e) =>
                        setLocalCantidad(Number(e.target.value) || 0)
                    }
                />
                <p className="infoText">
                    Un numero mayor a 30000 puede hacer que la página no
                    responda.
                </p>
            </div>
            <div className="input">
                <label htmlFor="intervalo">Intervalo toma de tiempo:</label>
                <input
                    type="number"
                    id="intervalo"
                    value={localIntervalo}
                    min={0}
                    onChange={(e) =>
                        setLocalIntervalo(Number(e.target.value) || 0)
                    }
                />
            </div>
            <button
                className="button"
                type="button"
                onClick={() => onGenerate(localCantidad, localIntervalo)}>
                Generar Gráfica
            </button>
        </div>
    );
}

export default Inputs;
