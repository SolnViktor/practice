import React from 'react'
import styles from './MyButton.module.scss'



export type MyButtonType = {
    btnName: string
    onClick: (id?: any) => void // id: string ??
    styled: 'default' | 'secondary'
}

export function MyButton(props: MyButtonType) {
    const isButtonStyle = props.styled === 'default' ? `${styles.btn} ${styles.btn_default}`
        : props.styled === 'secondary' ? `${styles.btn} ${styles.btn_secondary}` : styles.btn

    return (
        <button className={isButtonStyle} onClick={props.onClick}>
            {props.btnName}
        </button>
    )
}