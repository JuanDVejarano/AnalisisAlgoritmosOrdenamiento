import "./TablaArreglos.scss";
import { useState } from "react";

type Props = {
    arrayInicial?: number[];
    interval?: number;
    isInitial?: boolean;
};

function TablaArreglos({
    arrayInicial = [],
    interval = 0,
    isInitial = true,
}: Props) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <button
                className="buttonArrya"
                onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Ocultar" : "Mostrar"} Arreglo{" "}
                {isInitial ? "inicial" : "ordenado"}
            </button>
            <div
                className={`tablaArreglos ${
                    isVisible ? "tablaArreglos" : "tablaArreglos--hiden"
                }`}>
                {arrayInicial.map((value: number, index: number) => (
                    <div
                        key={index}
                        className={
                            index % interval === 0
                                ? "tablaArreglos__cell--resalt"
                                : "tablaArreglos__cell"
                        }>
                        {value}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TablaArreglos;
