import classNames from "classnames";
import style from "./OrangeButton.module.css";

function OrangeButton(props) {
    const { loading, buttonText } = props;
    return (
        <button className={classNames(style.button_submit, "py-1")} type="submit">
            {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : `${buttonText}`}
        </button>
    );
}

export default OrangeButton;
