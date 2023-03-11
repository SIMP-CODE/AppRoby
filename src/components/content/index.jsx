// mobil
import car from "../assets/img/car/car-pajero.jpg"
// testimoni
import tes1 from "../assets/img/testimoni/testimoni1.jpg"
import tes2 from "../assets/img/testimoni/testimoni2.jpg"
import tes3 from "../assets/img/testimoni/testimoni3.jpg"
import tes4 from "../assets/img/testimoni/testimoni4.jpg"
import tes5 from "../assets/img/testimoni/testimoni5.jpg"
import tes6 from "../assets/img/testimoni/testimoni6.jpg"
import tes7 from "../assets/img/testimoni/testimoni7.jpg"
import tes8 from "../assets/img/testimoni/testimoni8.jpg"

import "../assets/css/style.css"

function Content()
{
    return(
        <div>
            <div className="section">
                <div className="content">
                    <div className="baris">
                        <div className="content-mobil">
                            <div className="list-mobil">
                                <div className="baris">
                                    <a href="detail" className="mobil-menu">
                                        <div className="mobil">
                                            <img src={car} alt="" />
                                            <div className="mobil-info">
                                                <p className="mobil_name">ALL NEW RUSH</p>
                                                <p>Starting At</p>
                                                <p className="mobil_price">Rp. 289.000.000</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="detail" className="mobil-menu">
                                        <div className="mobil">
                                            <img src={car} alt="" />
                                            <div className="mobil-info">
                                                <p className="mobil_name">ALL NEW RUSH</p>
                                                <p>Starting At</p>
                                                <p className="mobil_price">Rp. 289.000.000</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="detail" className="mobil-menu">
                                        <div className="mobil">
                                            <img src={car} alt="" />
                                            <div className="mobil-info">
                                                <p className="mobil_name">ALL NEW RUSH</p>
                                                <p>Starting At</p>
                                                <p className="mobil_price">Rp. 289.000.000</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="detail" className="mobil-menu">
                                        <div className="mobil">
                                            <img src={car} alt="" />
                                            <div className="mobil-info">
                                                <p className="mobil_name">ALL NEW RUSH</p>
                                                <p>Starting At</p>
                                                <p className="mobil_price">Rp. 289.000.000</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="detail" className="mobil-menu">
                                        <div className="mobil">
                                            <img src={car} alt="" />
                                            <div className="mobil-info">
                                                <p className="mobil_name">ALL NEW RUSH</p>
                                                <p>Starting At</p>
                                                <p className="mobil_price">Rp. 289.000.000</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="lokasi">
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
                        <div className="content-testi">
                            <div className="list-testi">
                                <div className="sales-testi">
                                    <img src={tes1} alt="" />
                                    <br/>
                                    <p><b>RENDI PRATAMA</b></p>
                                    <span>SALES TOYOTA DELTAMAS</span>
                                </div>
                                <div className="baris">
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes1} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes2} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes3} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes4} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes5} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes6} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes7} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                    <div className="box-testi">
                                        <div className="testi">
                                            <img src={tes8} alt="" />
                                            <span>Nama Pembeli</span>
                                            <p><b>MEDAN</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content