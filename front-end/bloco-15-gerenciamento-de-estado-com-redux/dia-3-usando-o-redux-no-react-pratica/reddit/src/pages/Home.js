import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render() {
        return (
            <div className="container">
                Bem-vindo ao sistema de cadastramento!
                <Link to="/Login" className="home-link">Faça seu Login</Link>
            </div>
        )
    }
}

export default Home;