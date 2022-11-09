import { Fragment } from "react";
import classes from "./Header.module.css";
import bannerImage from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.gif";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        {/* <button>Cart</button> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="hollys banner" />
      </div>
    </Fragment>
  );
};

export default Header;
