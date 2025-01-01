import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import hnmLogo from '../images/hnmLogo.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];

    // 페이지 이동시 useNavigate 사용
    const navigate = useNavigate();
    const goToLogin=()=>{
        navigate("/login");
    };

    return (<div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className="nav-section">
            <img src={hnmLogo} width={100}></img>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon="fa-solid fa-input-text" />
                <input type="text"></input>
            </div>
        </div>
    </div>
    )
}

export default Navbar