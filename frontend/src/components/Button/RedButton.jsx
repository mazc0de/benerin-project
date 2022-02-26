import classNames from "classnames";
import style from "./RedButton.module.css";

function RedButton(props) {
    const { loading, buttonText } = props;
    return <button className={classNames(style.button_submit, "py-1")}>{loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : `${buttonText}`}</button>;
}

export default RedButton;
