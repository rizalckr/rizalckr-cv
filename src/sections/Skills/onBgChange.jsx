export function onBgChange () {
    const getTheme = document.getAttribute ('data-theme');
    const changeImg = (getTheme) => {
        if (getTheme, "dark") {
            return (
                <p>cdsdsd</p>
            )
        } else {
            return(
                <p>CDSDSD</p>
            )
        }
    }
    return (
        <input type="checkbox" onChange={changeImg} />
    )
}