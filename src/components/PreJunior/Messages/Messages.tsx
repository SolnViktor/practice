import styles from "./Messages.module.scss";
import React from "react";
import ava from '../../../accets/ava_img.png'
import {PreJuniorPropsType} from '../PreJunior';


export function Message({messageData}:PreJuniorPropsType) {



    return (
        <div className={styles.message}>
            <div className={styles.message_ava}><img src={ava} alt=""/></div>
            <div className={styles.message_container}>
                <div className={styles.message_content}>
                <div className={styles.name}>{messageData.name}</div>
                <div className={styles.text}>{messageData.message}</div>
                <div className={styles.date}>{messageData.date}</div>
                </div>

            </div>
        </div>
    );
}

