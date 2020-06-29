import styles from "./Navigation.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";


export function Navigation() {


    return (
        <div className={styles.container}>
            <nav>
                <ul>
                    <li className={styles.nav_item}>
                        <NavLink activeClassName={styles.active} to='/preJunior'>PreJunior</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink activeClassName={styles.active} to='/junior'>Junior</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink activeClassName={styles.active} to='/juniorPlus'>Junior+</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

