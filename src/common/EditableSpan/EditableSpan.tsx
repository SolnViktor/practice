import React, {useState, ChangeEvent} from 'react'
import styles from './EditableSpan.module.scss'


type EditableSpanType = {
    value: string
    updateTitle: (e:string, id:number) => void
    id: number
}


export function EditableSpan(props: EditableSpanType) {

    const [isEditMode, setIsEditMode] = useState(false)
    const onEditMode = () => {
        setIsEditMode(true)
    }
    const offEditMode = () => {
        setIsEditMode(false)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.updateTitle(e.currentTarget.value, props.id)
    }
    return (
        <>
            { isEditMode
                ? <input type="text" onBlur={offEditMode} autoFocus={true} value={props.value} onChange={onChangeHandler}/>
                : <span onDoubleClick={onEditMode}> {props.value} </span>
            }

        </>
    )
}