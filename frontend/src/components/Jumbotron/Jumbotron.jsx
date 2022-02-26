import classNames from "classnames";
import style from "./Jumbotron.module.css";

function Jumbotron() {
  return (
    <>
      <div className={classNames(style.jumbotron)}>
        <span>Welcome, Daffa!</span>
      </div>
    </>
  );
}

export default Jumbotron;
