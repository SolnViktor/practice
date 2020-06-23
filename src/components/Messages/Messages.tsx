import styles from "./Messages.module.scss";
import React from "react";
import ava from '../../accets/ava_img.png'


export function Message() {


    return (
        <div className={styles.message}>
            <div className={styles.message_ava}><img src={ava} alt=""/></div>
            <div className={styles.message_container}>
                <div className={styles.message_content}>
                <div className={styles.name}>Viktor</div>
                <div className={styles.text}>Text</div>
                <div className={styles.date}>27:05:2020, 12:28</div>
                </div>

            </div>
        </div>
    );
}

