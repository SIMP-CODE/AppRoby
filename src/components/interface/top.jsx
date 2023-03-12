import {Link} from "react-router-dom";

function Top()
{
    return(
        <>
            <div className="top-header">
                <div className="row-top-header">
                    <div className="logo-top-header">
                        <img src={process.env.PUBLIC_URL + '/img/icon/logo-header.png'} alt="Toyota_Tagline" />
                    </div>
                    <div className="menu-top-header">
                        <div className="menu-text">PILIHAN</div>
                        <div className="menu-icon">
                            <img src={process.env.PUBLIC_URL + '/img/icon/icon-menu.png'} alt="Toyota_Tagline" />
                        </div>
                        <div className="submenu-top-header">
                            <div className="submenu-col">
                                <Link to="/test-drive" className="submenu-item">
                                    <div className="submenu-text">TEST DRIVE</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-1.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                                <Link to="/galery" className="submenu-item">
                                    <div className="submenu-text">GALERI</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-3.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                                <Link to="" className="submenu-item">
                                    <div className="submenu-text">MOBIL BARU</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-7.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                                <Link to="" className="submenu-item">
                                    <div className="submenu-text">MOBIL BEKAS</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-4.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                                <Link to="/booking-service" className="submenu-item">
                                    <div className="submenu-text">BOOKING SERVICE</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-5.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                                <Link to="/simulasi-credit" className="submenu-item">
                                    <div className="submenu-text">SIMULASI CREDIT</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-6.png'} alt="Toyota_Tagline" /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Top