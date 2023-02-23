import icon1 from "../assets/img/nav1.jpg"
import icon2 from "../assets/img/nav2.jpg"
import icon3 from "../assets/img/nav3.jpg"
import icon4 from "../assets/img/nav4.jpg"
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
                            <div className="info-sales">
                                <img src={icon1} alt="icon1" />
                                <div className="sales-name">
                                    <span>
                                        HUB
                                        <br/>
                                        <span className="name">RENDI PRATAMA</span>
                                    </span>
                                </div>
                            </div>
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