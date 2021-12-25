import React from "react";
import {Link} from "react-router-dom"


class Navbar extends React.Component{
    render(){
        return (
            <div>
                <Link to="/">Flash Cards</Link>
                <Link to="/edit">Manage Cards</Link>

            </div>
        )
        }
}

export default Navbar 