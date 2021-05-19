import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCXtELPLwJFnq4sdWbvL5F-HAxQspRqwZyA&usqp=CAU' />
        <div className={s.loginblock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
       : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;