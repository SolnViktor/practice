import styles from "./Header.module.scss";
import React from "react";

import {Navigation} from "../Navigation/Navigation";


export function Header() {

    return (
        <div className={styles.container}>
           <Navigation />
        </div>
    );
}

