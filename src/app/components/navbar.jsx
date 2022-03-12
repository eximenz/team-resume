import React from "react";
import PropTypes from 'prop-types';
//import { useHistory } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */

const NavBar = ( { history } ) => {

    //const history=useHistory();
    //console.log(history.location);

     const handleSetActiveMenu = (menu) => {
        if (history.location.pathname.indexOf(menu)>-1) return " active"
     }

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.tagName === "A") {
            const ul = e.target.closest("ul");
            const anchors = ul.querySelectorAll("ul.nav>li>a");
            anchors.forEach((anchor) => {
                if (anchor.href !== e.target.href) {
                    anchor.classList.remove("active");
                } else if (!anchor.classList.contains("active")) {
                    anchor.classList.toggle("active");
                }
            });
            history.push(e.target.pathname);
        }
    };

    return (
        <>
            <ul className="nav nav-pills mb-3" onClick={handleClick}>
                <li className="nav-item">
                    <a
                        className={`nav-link ${handleSetActiveMenu("/main")}`}
                        aria-current="page"
                        href="/main"
                    >
                        Главная страница
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${handleSetActiveMenu(
                            "/profile"
                        )}`}
                        aria-current="page"
                        href="/profile"
                    >
                        Карта участника
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${handleSetActiveMenu(
                            "/bookmark"
                        )}`}
                        aria-current="page"
                        href="/bookmark"
                    >
                        Избранное
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Разное</a>
                </li>
            </ul>
        </>
    );
};

NavBar.propTypes = {
    history: PropTypes.object
}

export default NavBar;
