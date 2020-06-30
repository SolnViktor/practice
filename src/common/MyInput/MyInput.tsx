import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import styles from './MyInput.module.scss'



export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

export type MyInputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    value: string
    error?: string | null
}

export function MyInput (props: MyInputType) {


    return (
        <>
            {props.error ? <div className={styles.error_message}>{props.error}</div> : null}
            <input className={props.error ? `${styles.input} ${styles.input_error}` : styles.input}
                   type="text"
                   onKeyPress={props.onKeyPress}
                   onChange={props.onChange}
                   value={props.value}
            />

        </>
    );
}