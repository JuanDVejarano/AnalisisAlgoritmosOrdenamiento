import iconTooltip from "../../assets/icons/tooltip.png";
import "./TooltipPage.scss";

function TooltipPage({ children }: { children?: React.ReactNode }) {
    return (
        <div className="tooltip">
            Ayuda
            <img
                className="tooltip__icon"
                src={iconTooltip}
                alt="Icono de ayuda"
            />
            <span className="tooltiptext">{children}</span>
        </div>
    );
}

export default TooltipPage;
