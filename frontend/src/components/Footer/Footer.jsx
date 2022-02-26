import classNames from "classnames";
import style from "./Footer.module.css";

function Footer() {
    return (
        <>
            <footer className={classNames(style.footer, "text-center text-lg-start py-2")}>
                <div className="text-center p-3 text-white">
                    Made with 🤚✋🧠 by bener<span className="fw-bold">.in</span> team
                    {/* <a className="text-white mx-2">bener</a> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;
