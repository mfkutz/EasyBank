import './Button.css'

const Button = ({ prop }) => {
    return (
        <a href="#" className={`btn-request ${prop} `}>
            Request invite
        </a>
    )
}

export default Button