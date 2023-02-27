import iconwa from "../assets/img/nav-wa.png"
import icon2 from "../assets/img/nav2.png"
import icon3 from "../assets/img/nav3.png"
import icon4 from "../assets/img/nav4.png"
import icon5 from "../assets/img/nav6.png"
import "../assets/css/style.css"
import React, { useState } from 'react';

function Navigator()
{
    const [isOpen, setIsOpen] = useState(false);

    function toggleNav() {
      setIsOpen(!isOpen);
    }

    return(
        <div>
            <div className="navigator">
                <div className="info">
                    <div className="info-item">
                        <div className="info-inner">
                            <a href="#" className="info-sales">
                                <img src={iconwa} alt="icon1" />
                                <div className="sales-name">
                                    <span>
                                        <p>HUB</p>
                                        <p className="name">RENDI PRATAMA</p>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-inner">
                            <div className="info-box">
                                <span>0822-9999-0000</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-item menu">
                        <div className="info-inner">
                            <div className="info-box">
                                <span>Jl. Balaikota No 2 A, Medan 20111</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`info menu ${isOpen ? 'menu_open' : ''}`} >
                    <div className="info-item">
                        <div className="info-inner">
                            <a href="/galery" className="menu-box">
                                <img src={icon5} alt="icon" />
                                <span>MOBIL BEKAS</span>
                            </a>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-inner">
                            <a href="/galery" className="menu-box">
                                <img src={icon2} alt="icon" />
                                <span>GALLERY</span>
                            </a>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-inner">
                            <a href="/test-drive" className="menu-box">
                                <img src={icon3} alt="icon" />
                                <span>TEST DRIVE</span>
                            </a>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-inner">
                            <a href="/info-derek" className="menu-box">
                                <img src={icon4} alt="icon" />
                                <span>INFO DEREK</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="menu-toggle">
                    <input type="checkbox" onClick={toggleNav} />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    )
}

export default Navigator