import Slider from '../components/slider'

function AwalPage()
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
                                <div className="submenu-item">
                                    <div className="submenu-text">TEST DRIVE</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-1.png'} alt="Toyota_Tagline" /></div>
                                </div>
                                <div className="submenu-item">
                                    <div className="submenu-text">INFO DEREK</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-2.png'} alt="Toyota_Tagline" /></div>
                                </div>
                                <div className="submenu-item">
                                    <div className="submenu-text">GALERI</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-3.png'} alt="Toyota_Tagline" /></div>
                                </div>
                                <div className="submenu-item">
                                    <div className="submenu-text">MOBIL BEKAS</div>
                                    <div className="submenu-icon"><img src={process.env.PUBLIC_URL + '/img/icon/icon-4.png'} alt="Toyota_Tagline" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Slider />
            <div className="mid-info">
                <div className="mid-info-row">
                    <div className="mid-info-item">
                        RENDI PRATAMA
                    </div>
                    <div className="mid-info-item">
                        0822-9999-0000
                    </div>
                    <div className="mid-info-item">
                        Jln. Balai Kota No.2 A
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content-row">
                    <div className="content-col-car">
                        <div className="content-car-row">
                            <div className="content-car-col">
                                <div className="car-item">
                                    <div className="car-img">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p className='car-name'>AVANZA</p>
                                    <p>STARTING AT</p>
                                    <div className="car-price">
                                        <p>Rp. 999.999.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content-car-col">
                                <div className="car-item">
                                    <div className="car-img">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p className='car-name'>AVANZA</p>
                                    <p>STARTING AT</p>
                                    <div className="car-price">
                                        <p>Rp. 999.999.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content-car-col">
                                <div className="car-item">
                                    <div className="car-img">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p className='car-name'>AVANZA</p>
                                    <p>STARTING AT</p>
                                    <div className="car-price">
                                        <p>Rp. 999.999.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content-car-col">
                                <div className="car-item">
                                    <div className="car-img">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p className='car-name'>AVANZA</p>
                                    <p>STARTING AT</p>
                                    <div className="car-price">
                                        <p>Rp. 999.999.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content-car-col">
                                <div className="car-item">
                                    <div className="car-img">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <p className='car-name'>AVANZA</p>
                                    <p>STARTING AT</p>
                                    <div className="car-price">
                                        <p>Rp. 999.999.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-location">
                            <h2>Contact Us</h2>
                            <div className="item-location">
                                <iframe
                                className="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.981647710091!2d98.67688431194443!3d3.5916832878076113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c676176d83%3A0x1862cdf338e7d639!2sJl.%20Balai%20Kota%20No.2a%2C%20Kesawan%2C%20Kec.%20Medan%20Bar.%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020111!5e0!3m2!1sid!2sid!4v1677754457102!5m2!1sid!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="content-col-sales">
                        <div className="sales-profile-img">
                            <img src={process.env.PUBLIC_URL + '/img/testi/sales-profile.png'} alt="sales-profile" />
                        </div>
                        <div className="sales-testi-row">
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="testi-sales1" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="testi-sales1" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales2.png'} alt="testi-sales2" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales2.png'} alt="testi-sales2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-block">
                    
                </div>
            </div>
        </>
    )
}
export default AwalPage