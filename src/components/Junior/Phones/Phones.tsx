import React, {useState} from 'react'
import {MyButton} from '../../../common/MyButton/MyButton';
import styles from './Phones.module.scss'
import {saveState, restoreState} from '../../../common/helpers';
import {MyCheckbox} from '../../../common/MyCheckBox/MyCheckBox';

export type PhonesType = {id:number, brand: string, isChecked: boolean}

export function Phones() {

    let phonesInitial = [
        {id: 1, brand: 'Nokia', isChecked: false},
        {id: 2, brand: 'Samsung', isChecked: false},
        {id: 3, brand: 'iPhone', isChecked: false},
        {id: 4, brand: 'Honor', isChecked: false},
        {id: 5, brand: 'Xiaomi', isChecked: false}
        ]
    const [phones, setPhones] = useState<PhonesType[]>(phonesInitial)

    const updatePhoneBrand = (newPhoneBrand:string, id:number) => {
        let copyPhones = phones.map ( p => {
            if(p.id === id) return {...p, brand: newPhoneBrand}
            return p
        })
        setPhones(copyPhones)
    }
    let onChangeCheckboxHandler = (isChecked: boolean, id: number) => {
        let copyPhones = phones.map( elem => elem)
        let brand = copyPhones.find (elem => elem.id === id )
        if(brand) brand.isChecked = isChecked
        setPhones(copyPhones)
    }

    const saveFilms = () => {
        saveState('phones', phones)
    }
    const loadFilms = () => {
        setPhones(restoreState('phones', phones))
    }

    return (
        <div className={styles.container}>
            <div>
                <MyButton btnName={'Save'} onClick={saveFilms} styled={'default'}/>
                <MyButton btnName={'Load'} onClick={loadFilms} styled={'secondary'}/>
            </div>
            <div>
                <MyCheckbox name={'phone'} itemsList={phones} onChange={onChangeCheckboxHandler}
                            updatePhoneBrand={updatePhoneBrand}/>
            </div>
        </div>
    )
}