import React, {useState} from 'react'
import styles from './Date.module.scss'
import moment from 'moment';
import {MyButton} from '../../../common/MyButton/MyButton';
import {connect} from 'react-redux';
import {setLoading} from '../../../redux/loader-reducer';


export function Date(props: any) {

    let [time, setTime] = useState<any>()
    let [date, setDate] = useState<any>()

    let [timerId, setTimerId] = useState<any>()


    let commonShowTime = () => {
        let time = moment().format('LTS')
        setTime(time)
    }
    let showTime = () => {
        commonShowTime()
        const timer_id = setInterval(() => {
            commonShowTime()
        }, 1000)
        setTimerId(timer_id)
    }

    const stopTimer = () => {
        clearInterval(timerId)
        setTime(false)
    }
    const showDateOnMouseOver = () => {
        let date = moment().format('LL')
        let dateArr = date.split(' ')
        let num = dateArr[1].slice(0, 2)
        let str = `${num} ${dateArr[0]} ${dateArr[2]}`
        setDate(str)
    }
    const clearDataOnMouseLeave = () => {
        setDate(false)
    }
    let checkLoader = () => {
        props.setLoading(true)
        setTimeout(() => {
            props.setLoading(false)
        }, 3000)
    }


    return (
        <div className={styles.container}>
            <div className={styles.currentTime}>
                {date && <span className={styles.date}>{date}</span>}
                {time &&
                <span onMouseOver={showDateOnMouseOver} onMouseLeave={clearDataOnMouseLeave}>
                    {time}
                </span>}
                <MyButton btnName={'Show time'} styled={'default'} onClick={showTime}/>
                <MyButton btnName={'Clear'} styled={'secondary'} onClick={stopTimer}/>
            </div>
            <div className={styles.btnLoader}>
                <MyButton btnName={'Check loader'} styled={'default'} onClick={checkLoader}/>
            </div>
        </div>
    )
}

export const DateContainer = connect(null, {setLoading})(Date)