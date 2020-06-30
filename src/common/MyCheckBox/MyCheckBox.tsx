import React, {ChangeEvent} from 'react'
import styles from './MyCheckBox.module.scss'
import {PhonesType} from '../../components/Junior/Phones/Phones';
import {EditableSpan} from '../EditableSpan/EditableSpan';

type MyCheckboxTypes = {
    itemsList: PhonesType[]
    name: string
    onChange: (e:boolean, id: number) => void
    updatePhoneBrand: (newPhoneBrand:string, id:number) => void
}
export function MyCheckbox(props: MyCheckboxTypes) {

let onCheckHandler = (e: ChangeEvent<HTMLInputElement>, id:number) => {
    props.onChange(e.currentTarget.checked, id)
}
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <span>Choose {props.name}:</span>
                {props.itemsList.map((item) =>
                    <div key={item.id}>
                        <input type="checkbox" checked={item.isChecked}
                               onChange={ (e) => onCheckHandler(e, item.id)} />
                        <EditableSpan value={item.brand}  id={item.id} updateTitle={props.updatePhoneBrand}/>
                    </div>
                )}
            </div>
        </div>
    )
}