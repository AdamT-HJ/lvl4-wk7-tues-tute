import React from 'react'
import { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {

    const [isActive, setIsActive]= useState(false)


    function toggleSidebar() {
        setIsActive(!isActive)
    }





  return (
    <>  
        <div className={`${styles.sidebar} ${isActive ? styles.isActive : ""}`}>
            <div>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>

                <button onClick={toggleSidebar}>toggle</button>
            </div>


        </div>

    </>
  )
}


