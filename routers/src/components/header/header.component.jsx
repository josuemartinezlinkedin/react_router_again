const Header = ({menu, logo}) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo image" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <p>oh hey there</p>
                    </li>
                    <li>
                        <p>im another p tag hihi</p>
                    </li>
                </ul>
            </div>
        </div>
    )
} 
export default Header;