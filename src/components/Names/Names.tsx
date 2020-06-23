import styles from "./Names.module.scss";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";
import {MyButton} from "../MyButton/MyButton";
import {MyInput} from "../MyInput/MyInput";


export function Names() {
    type NamesType = {
        id: string
        name: string
    }

    const [inputValue, setInputValue] = useState('')
    const [names, setNames] = useState <any>([])
    const [error, setError] = useState <any>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onClickOnKeyPressSettings()
    }
    const onClickHandler = () => {
        onClickOnKeyPressSettings()
    }

    const onClickOnKeyPressSettings = () => {
        const resultValue = inputValue.trim()
        if(resultValue) {
            let newItem = {id: v1(), name: resultValue}
            setNames([...names, newItem])
            alert(`Привет ${inputValue}`)
            setInputValue('')
        } else {
            setError('Введите корректное имя')
        }
    }

    const mappedNames = names.map( (item:any) => <li>{item.name}</li>)

    return (
        <div className={styles.container}>
            <div>

                <MyInput onChange={onChangeHandler}
                         onKeyPress={onKeyPressHandler}
                         value={inputValue}
                         error={error}
                />
                <MyButton btnName={'Отправить'} onClick={onClickHandler} style={'default'}/>
            </div>
            <div>
                <ol>
                    {names.length > 0 && mappedNames}
                </ol>
            </div>
        </div>
    );
}

