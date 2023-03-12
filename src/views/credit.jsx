import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Sales from "../components/interface/testimoni"
import Bottom from "../components/interface/bot"

function Credit()
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
                            <div className="drive-judul">SIMULASI CREDIT</div>
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
                                        <p className="label-input" htmlFor="">DP (Uang Muka)</p>
                                        <input className="form-input" type="number" name="" placeholder="Rp." id="" />
                                        <p className="label-input" htmlFor="">TENOR*</p>
                                        <select className="form-input">
                                            <option value="12 BULAN">12 Bulan</option>
                                            <option value="24 BULAN">24 Bulan</option>
                                            <option value="36 BULAN">36 Bulan</option>
                                            <option value="48 BULAN">48 Bulan</option>
                                        </select>
                                        <div className="label-individu">CATATAN</div>
                                        <p className="label-input" htmlFor="">Saya mengizinkan Toyoya dan mitranya untuk menghubungi Saya dalam membantu proses pembelian mobil Toyota. Dengan memberikan email dan nomor handphone, Saya telah menyetujui untuk menerima semua pemberitahuan melalui Toyota.</p>
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
export default Credit