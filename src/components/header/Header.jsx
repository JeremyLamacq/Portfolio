import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <Link to='/experience' id="experience"/>
            <Link to='skills' id="skills"/>
            <Link to='contact' id="contact"/>

        </div>
    )
}

export default Header;