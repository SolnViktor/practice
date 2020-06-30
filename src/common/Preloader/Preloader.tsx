import React from 'react'
import styles from './Preloader.module.scss'


export function Preloader( ) {


    return (
        <div className={styles.container}>
            <div className={styles.lds_ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}