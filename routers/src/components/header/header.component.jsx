const Header = ({heading, logo}) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo image" />
            </div>
            <div className="heading">
            <h1>{heading}</h1>
            </div>
        </div>
    )
} 
export default Header;