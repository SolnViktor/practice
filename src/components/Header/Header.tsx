import styles from "./Header.module.scss";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";
import {MyButton} from "../../common/MyButton/MyButton";
import {MyInput} from "../../common/MyInput/MyInput";
import {Navigation} from "../Navigation/Navigation";


export function Header() {

    return (
        <div className={styles.container}>
           <Navigation />
        </div>
    );
}

