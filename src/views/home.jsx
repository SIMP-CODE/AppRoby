import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Bottom from "../components/interface/bot"

function AwalPage()
{
    return(
        <>
            <Top />
            <Slider />
            <Info />
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
            <Bottom />
        </>
    )
}
export default AwalPage