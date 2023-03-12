import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Sales from "../components/interface/testimoni"
import Bottom from "../components/interface/bot"

function Service()
{
    return(
        <>
            <Top/>
            <Slider/>
            <Info/>
            <div className="content">
                <div className="content-row">
                    <div className="content-col-car">
                            <div className="list-mobil">
                                <div className="drive-judul">BOOKING SERVICE</div>
                                <div className="label-individu jarak-kiri">INFORMASI DATA PRIBADI</div>
                                <div className="baris">
                                    <div className="drive-self">
                                        <div className="form">
                                            <p className="label-input" htmlFor="">Nama*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Alamat*</p>
                                            <textarea className="form-input alamat" />
                                            <p className="label-input" htmlFor="">Jenis Mobil*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Nomor Kendaraan*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <div className="baris">
                                                <div className="kolom-form-hp">
                                                    <p className="label-input" htmlFor="">Nomor HP*</p>
                                                    <input className="form-input" type="text" name="" id="" />
                                                </div>
                                                <div className="kolom-form-tgl jarak5">
                                                    <p className="label-input" htmlFor="">Tanggal*</p>
                                                    <input className="form-input" type="date" name="" id="" />
                                                </div>
                                                <div className="kolom-form-wkt">
                                                    <p className="label-input" htmlFor="">Pukul*</p>
                                                    <input className="form-input" type="time" name="" id="" />
                                                </div>
                                            </div>
                                            <p className="label-input" htmlFor="">Km*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Keluhan*</p>
                                            <textarea className="form-input alamat" />
                                            <div className="label-individu">CATATAN</div>
                                            <p className="label-input" htmlFor="">Saya mengizinkan Toyoya dan mitranya untuk menghubungi Saya dalam membantu proses pembelian mobil Toyota. Dengan memberikan email dan nomor handphone, Saya telah menyetujui untuk menerima semua pemberitahuan melalui Toyota.</p>
                                        </div>
                                    </div>
                                    <div className="drive-comp">

                                    </div>
                                </div>
                                <div>
                                    <button className="tombol margin-kanan-10">RESET</button>
                                    <button type="submit" className="tombol">SUBMIT</button>
                                </div>
                            </div>
                    </div>
                    <Sales/>
                </div>
            </div>
            <Bottom/>
        </>
    )
}
export default Service