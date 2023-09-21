import "./style.css";
const Button = ({title,classN,onClick}) => {
    return (
        <>
            <button onClick={onClick} className={`${classN == "primary" || classN == "secondary" ?classN == "primary"? "btt bgPrimary" :"btt bgSecondary":"btt"}`}>
            {title}
            </button>
        </>
    );
}

export default Button;
