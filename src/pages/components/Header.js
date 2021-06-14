import React from 'react'
import Person from '../../img/person1.png';
import Mountain1 from '../../img/mountain11.png';
import Mountain2 from '../../img/mountain22.png';
import Mountain3 from '../../img/mountain33.png';
import Sky from '../../img/sky1.png';
import { useSelector, useDispatch } from "react-redux";
import { userinfo } from '../../store/Actions/userActions';

// import AvvncorLogoSmallTransparent from '../../img/Avvncor logo very small.png'


function Header() {


const userInfo = useSelector((state)=> state.userInformation)
console.log(userInfo)
  let dispatch = useDispatch();

  function userinfofunction(info){
     dispatch(userinfo(info)) }

    return (
        <header>
            <nav>
                <div className="container">
                    <h3 className="logo">Avvncor<span> Initiates</span></h3>
                    <div className="hamburger-menu" onClick={e=>userinfofunction({name:'Amaan'})}>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>

                <h1 className="big-title translate" data-speed="0.1">Care.</h1>

            <img src={Person}    className="person    translate"  data-speed="-0.1" alt="" />
            <img src={Mountain1} className="mountain1 translate"  data-speed="0.2" alt="" />
            <img src={Mountain2} className="mountain2 translate"  data-speed="0.4" alt="" />
            <img src={Mountain3} className="mountain3 translate"  data-speed="0.3" alt="" />
            <img src={Sky}       className="sky       translate"  data-speed="0.5" alt=""  />
        </header>
    )
}



export default Header
