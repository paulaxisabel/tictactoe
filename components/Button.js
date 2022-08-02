import restart from "../images/icons/icon-restart.svg";
import "../styles/Button.scss";

export const Buttons = {
    orange: "orange",
    green: "green",
    grey: "grey",
    large: "large",
    medium: "medium",
    icon: "icon"
}

export function Button({text, color, size}) {
    return (
        <button className={`${color} ${size}`}>
            <i>{text ? text : <img src={restart} alt="restart"/>}</i>
        </button>
    )
}

