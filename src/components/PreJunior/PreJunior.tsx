import React from "react";
import {Cases} from "./Cases/Cases";
import {Names} from "./Names/Names";
import {Message} from "./Messages/Messages";
import styles from './PreJunior.module.scss'
import {MessageDataType} from '../../App';

export type PreJuniorPropsType = {
    messageData: MessageDataType
}

export function PreJunior(props:PreJuniorPropsType) {



    return (
        <div className={styles.container}>
            <Message messageData={props.messageData}/>
            <Cases/>
            <Names/>
        </div>
    );
}

