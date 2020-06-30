import React, {useState, ChangeEvent} from 'react'
import styles from './Radio.module.scss'
import {MyRadio} from '../../../common/MyRadio/MyRadio';


export function Radio() {
    let cars = ['BMW', 'Priora', 'Ferrari', 'Kia', 'Lexus']
    let [radioValue, setRadioValue] = useState('')
    let onChangeRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.currentTarget.value)
    }
    return (
        <div className={styles.container}>
            <MyRadio itemsList={cars} name={'Car'} onChange={onChangeRadioHandler}/>
            <span>Your car: {radioValue}</span>
        </div>
    )
}