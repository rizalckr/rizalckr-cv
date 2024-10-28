import React from "react";
import './DarkMode.css';

export default function DarkMode() {

    const SwitchTheme = (e) => {
        if(e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }

    const changeImage = (e) => {
        if(e.target.checked) {
            document.querySelector('img').setAttribute('data-theme', 'dark')
        } else {
            document.querySelector('img').setAttribute('data-theme', 'light')
        }
    }

    
    return(
        <>
<div className="container">
<label className="ui-switch">
  <input type="checkbox" onChange={SwitchTheme} />
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>
</div>
        </>
    )
} 