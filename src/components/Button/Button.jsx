export const Button = ({text, variant, functionClick}) => {
    return (
        <button className={`btn ${variant}`} onClick={functionClick} > {text} </button>
    )
}