import React, {ChangeEvent} from 'react'
import styles from './MyRadio.module.scss'

type MyRadioTypes = {
    itemsList: string[]
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function MyRadio(props: MyRadioTypes) {


    return (
        <div className={styles.container}>
            <span>Choose {props.name}:</span>
            {props.itemsList.map((item,index) =>
                <div key={index}>
                    <input type="radio" id={`${props.name}${index}`}
                            name={props.name} value={item} onChange={props.onChange}/>
                    <label htmlFor={`${props.name}${index}`}>{item}</label>
                </div>
            )}
        </div>
    )
}