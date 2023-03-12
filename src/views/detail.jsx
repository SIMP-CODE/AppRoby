import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Sales from "../components/interface/testimoni"
import Bottom from "../components/interface/bot"

function Detail()
{
    return(
        <>
            <Top />
            <Slider />
            <Info />
            <div className="content">
                <div className="content-row">
                    <div className="content-col-car">
                        <div className="list-mobil">
                            <div className="car-detail">
                                <p className="car-title-detail">AVANZA</p>
                                <p className="car-start">Starting At</p>
                                <div className="car-price-detail">
                                    <p>Rp. 999.000.000</p>
                                </div>
                                <div className="car-detail-row">
                                    <div className="car-detail-col">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <div className="car-detail-col">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                    <div className="car-detail-col">
                                        <img src={process.env.PUBLIC_URL + '/img/car/car1.png'} alt="Toyota_Tagline" />
                                    </div>
                                </div>
                                <a href="" className="car-detail-button">
                                    <p>CHECK NOW</p>
                                </a>
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
                    </div>
                    <Sales />
                </div>
            </div>
            <Bottom />
        </>
    )
}
export default Detail