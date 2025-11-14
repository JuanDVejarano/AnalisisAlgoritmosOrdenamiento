import "./TablaArreglos.scss";

type Props = {
    arrayInicial?: number[];
    interval?: number;
};

function TablaArreglos({ arrayInicial = [], interval = 0 }: Props) {
    return (
        <div className="tablaArreglos">
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
    );
}

export default TablaArreglos;
