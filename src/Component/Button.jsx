function Button ({children, handleClick, style='primary', shadow = false, type= 'button'}) {
    return (
        <button type={type} onClick={handleClick} className={`$`}></button>
    );
}

export default Button;