import styles from "./Names.module.scss";
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {v1} from "uuid";
import {MyButton} from "../../../common/MyButton/MyButton";
import {MyInput} from "../../../common/MyInput/MyInput";


export function Names() {
    type NamesType = {
        id: string
        name: string
    }



    const [inputValue, setInputValue] = useState('')
    const [names, setNames] = useState <NamesType[]>([])
    const [error, setError] = useState <string | null>(null)
    const [namesCount, setNamesCount] = useState <number>(0)

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
    useEffect( () => {
        setNamesCount(names.length)
    }, [names])

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

    const mappedNames = names.map( (item:NamesType) => <li>{item.name}</li>)

    return (
        <div className={styles.container}>
            <div>

                <MyInput onChange={onChangeHandler}
                         onKeyPress={onKeyPressHandler}
                         value={inputValue}
                         error={error}
                />
                <MyButton btnName={'Отправить'} onClick={onClickHandler} styled={'default'}/>
                <span className={styles.names_title}>Текущее количество имен: </span>
                <span className={styles.names_count}>{namesCount}</span>
            </div>
            <div>
                <ol>
                    {names.length > 0 && mappedNames}
                </ol>
            </div>

        </div>
    );
}

