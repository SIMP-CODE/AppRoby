// derek
import derek_vektor from "../assets/img/derek/derek.jpg"

// testimoni
import tes1 from "../assets/img/testimoni/testimoni1.jpg"
import tes2 from "../assets/img/testimoni/testimoni2.jpg"
import tes3 from "../assets/img/testimoni/testimoni3.jpg"
import tes4 from "../assets/img/testimoni/testimoni4.jpg"

import "../assets/css/style.css"

function InfoDerek()
{
    return(
        <div>
            <div className="section">
                <div className="content">
                    <div className="baris">
                        <div className="content-mobil">
                            <div className="list-mobil">
                                <div className="drive-judul">INFO DEREK</div>
                                <div className="baris reverse-kolom">
                                    <div className="drive-self">
                                        <div className="label-individu jarak-kiri">INFORMASI DATA PRIBADI</div>
                                        <div className="form">
                                            <p className="label-input" htmlFor="">Nama*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Alamat*</p>
                                            <textarea className="form-input alamat" />
                                            <p className="label-input" htmlFor="">Nomor HP*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Masalah*</p>
                                            <textarea className="form-input alamat" />
                                        </div>
                                    </div>
                                    <div className="drive-comp">
                                        <img className="derek-vektor" src={derek_vektor} alt="" />
                                    </div>
                                </div>
                                <button className="tombol margin-kanan-10">RESET</button>
                                <button type="submit" className="tombol">SUBMIT</button>
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

export default InfoDerek