import {Link} from "react-router-dom"

function Bot()
{
    return(
        <>
            <div className="bottom">
                <div className="bottom-block">
                    <div className="bottom-row">
                        <div className="bottom-col">
                            <div className="bottom-col-block">
                                <div className="bottom-item-head">
                                    <p>USEFUL LINKS</p>
                                </div>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>TEST DRIVE</p>
                                </Link>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>INFO DEREK</p>
                                </Link>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>GALERI</p>
                                </Link>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>MOBIL BEKAS</p>
                                </Link>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>BOOKING SERVICE</p>
                                </Link>
                                <Link to="/" className="bottom-link">
                                    <div className="bottom-icon-link">-</div>
                                    <p>SIMULASI CREDIT</p>
                                </Link>
                            </div>
                        </div>
                        <div className="bottom-col">
                            <div className="bottom-col-block">
                                <div className="bottom-item-head">
                                    <p>TOYOTA MEDAN</p>
                                </div>
                                <div className="bottom-link">
                                    <p>Jln. Balai Kota No. 2 Medan</p>
                                </div>
                                <a href="https://fb.com" className='bottom-socmed' target="_blank">
                                    <div className="bottom-icon-socmed">
                                        <img src={process.env.PUBLIC_URL + '/img/icon/link-fb.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p>ROBY</p>
                                </a>
                                <a href="https://instagram.com" className='bottom-socmed' target="_blank">
                                    <div className="bottom-icon-socmed">
                                        <img src={process.env.PUBLIC_URL + '/img/icon/link-ig.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p>ROBY</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-down">
                <p>© Copyright SIMP CODE Reserved<br/>Designed by SIMP CODE</p>
            </div>
        </>
    )
}
export default Bot