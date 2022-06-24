import React, { useContext } from "react";
import { MenuGroup, MenuItem, MenuLink } from "./NavElements";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/reducers/provider";
import UpdateData from "../../utils/UpdateData";

const Nav = ({ collapse, primary }) => {
  const state = useContext(GlobalContext);
  return (
    <MenuGroup style={collapse && { display: "flex" }}>
      <MenuItem primary={primary} className="nav-hover">
        <Link to="/about"> About Us </Link>
      </MenuItem>
      <MenuItem primary={primary} className="nav-hover">
        <Link to="/news"> News </Link>
      </MenuItem>
      <MenuItem primary={primary} className="nav-hover">
        <Link
          onClick={() =>
            UpdateData(state["showEventDispatch"], "UPDATE_SHOW_EVENT", false)
          }
          to="/events"
        >
          {" "}
          Events{" "}
        </Link>
      </MenuItem>
      <MenuItem primary={primary} className="nav-hover">
        <Link to="/faq"> FAQ </Link>
      </MenuItem>
      <MenuItem primary={primary} className="nav-hover">
        <Link to="/contact"> Contact</Link>
      </MenuItem>
    </MenuGroup>
  );
};

export default Nav;
