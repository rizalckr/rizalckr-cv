import React from "react";
import './DarkMode.css'

export default function DarkMode() {

    const SwitchTheme = (e) => {
        if(e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }

    return(
        <>
        <div className="wrapper">
            <label className="switch">
                <input type="checkbox" onChange={SwitchTheme}/>
                <span className="slider round"></span>
            </label>
        </div>
        </>
    )
} 