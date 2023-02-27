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