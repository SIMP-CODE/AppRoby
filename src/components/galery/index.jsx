// mobil
import car from "../assets/img/car/car-pajero.jpg"
// galery
import galery1 from "../assets/img/galery/galery1.jpg"
import galery2 from "../assets/img/galery/galery2.jpg"
import galery3 from "../assets/img/galery/galery3.jpg"
import galery4 from "../assets/img/galery/galery4.jpg"
import galery5 from "../assets/img/galery/galery5.jpg"
import galery6 from "../assets/img/galery/galery6.jpg"
// testimoni
import tes1 from "../assets/img/testimoni/testimoni1.jpg"
import tes2 from "../assets/img/testimoni/testimoni2.jpg"
import tes3 from "../assets/img/testimoni/testimoni3.jpg"
import tes4 from "../assets/img/testimoni/testimoni4.jpg"

import "../assets/css/style.css"

function Gambar_galery()
{
    return(
        <div>
            <div className="section">
                <div className="content">
                    <div className="baris">
                        <div className="content-mobil">
                            <div className="list-mobil">
                                <div className="baris">
                                    <div className="gambar-galery">
                                        <img src={galery1} alt="" />
                                    </div>
                                    <div className="gambar-galery">
                                        <img src={galery2} alt="" />
                                    </div>
                                    <div className="gambar-galery">
                                        <img src={galery3} alt="" />
                                    </div>
                                    <div className="gambar-galery">
                                        <img src={galery4} alt="" />
                                    </div>
                                    <div className="gambar-galery">
                                        <img src={galery5} alt="" />
                                    </div>
                                    <div className="gambar-galery">
                                        <img src={galery6} alt="" />
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gambar_galery