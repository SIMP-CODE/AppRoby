import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Sales from "../components/interface/testimoni"
import Bottom from "../components/interface/bot"

function Coba()
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
                                <div className="drive-judul">BOOKING TEST DRIVE</div>
                                <div className="label-individu jarak-kiri">INFORMASI DATA PRIBADI</div>
                                <div className="baris">
                                    <div className="drive-self">
                                        <div className="form">
                                            <p className="label-input" htmlFor="">Nama*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <p className="label-input" htmlFor="">Alamat*</p>
                                            <textarea className="form-input alamat" />
                                            <p className="label-input" htmlFor="">Kota*</p>
                                            <select className="form-input">
                                                <option value="option1">Kota 1</option>
                                                <option value="option2">Kota 2</option>
                                                <option value="option3">Kota 3</option>
                                            </select>
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
                                            <p className="label-input" htmlFor="">Email*</p>
                                            <input className="form-input" type="text" name="" id="" />
                                            <div className="baris">
                                                <div className="kolom-form-2">
                                                    <p className="label-input" htmlFor="">Model*</p>
                                                    <input className="form-input" type="text" name="" id="" />
                                                </div>
                                                <div className="kolom-form-2 jarak-kiri">
                                                    <p className="label-input" htmlFor="">Tipe*</p>
                                                    <input className="form-input" type="text" name="" id="" />
                                                </div>
                                            </div>
                                            <p className="label-input" htmlFor="">Pertanyaan*</p>
                                            <textarea className="form-input alamat" />
                                            <div className="label-individu">CATATAN</div>
                                            <p className="label-input" htmlFor="">Saya mengizinkan Toyoya dan mitranya untuk menghubungi Saya dalam membantu proses pembelian mobil Toyota. Dengan memberikan email dan nomor handphone, Saya telah menyetujui untuk menerima semua pemberitahuan melalui Toyota.</p>
                                        </div>
                                    </div>
                                    <div className="drive-comp">
                                        <div className="form">
                                            <div  className="label-info">
                                                <span>
                                                    Kebutuhan
                                                </span>
                                            </div>
                                            <div className="radio-kebutuhan">
                                                <div className="radio">
                                                    <input
                                                    type="radio"
                                                    id="option1"
                                                    name="options"
                                                    value="option1"
                                                    />
                                                    <label htmlFor="option1">Individu</label>
                                                </div>
                                                <div className="radio">
                                                    <input
                                                    type="radio"
                                                    id="option2"
                                                    name="options"
                                                    value="option2"
                                                    />
                                                    <label htmlFor="option2">Company</label>
                                                </div>
                                            </div>
                                            <div  className="label-info">
                                                <span>
                                                    Rencana Pembelian
                                                </span>
                                            </div>
                                            <div>
                                                <div className="radio_rencana">
                                                    <input
                                                    type="radio"
                                                    id="radio_rencana1"
                                                    name="rencana"
                                                    value="radio_rencana1"
                                                    />
                                                    <label htmlFor="radio_rencana1">Dalam 1 - 2 Bulan</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio_rencana">
                                                    <input
                                                    type="radio"
                                                    id="radio_rencana2"
                                                    name="rencana"
                                                    value="radio_rencana2"
                                                    />
                                                    <label htmlFor="radio_rencana2">Dalam 1 - 2 Minggu Ini</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio_rencana">
                                                    <input
                                                    type="radio"
                                                    id="radio_rencana3"
                                                    name="rencana"
                                                    value="radio_rencana3"
                                                    />
                                                    <label htmlFor="radio_rencana3">Dalam Minggu Ini</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio_rencana">
                                                    <input
                                                    type="radio"
                                                    id="radio_rencana4"
                                                    name="rencana"
                                                    value="radio_rencana4"
                                                    />
                                                    <label htmlFor="radio_rencana4">Booking Test Drive</label>
                                                </div>
                                            </div>
                                        </div>
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
export default Coba