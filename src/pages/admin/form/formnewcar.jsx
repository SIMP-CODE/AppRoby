import HeaderAdmin from "../../../components/admin/header";
import FooterAdmin from "../../../components/admin/footer";

function MobilBaru() {
    return (
        <>
            <div className="container">
                <div>
                    <HeaderAdmin />
                    <div className="baris-label">
                        <div className="label-kondisi">
                            MOBIL BARU
                        </div>
                    </div>
                        <div className="menu-admin">
                            <div className="form">
                                <p className="label-input" htmlFor="">Nama Mobil*</p>
                                <input className="form-input" type="text" name="" id="" />
                                <p className="label-input" htmlFor="">Type Mobil*</p>
                                <input className="form-input" type="text" name="" id="" />
                                <p className="label-input" htmlFor="">Tahun Mobil*</p>
                                <input className="form-input" type="text" name="" id="" />
                                <p className="label-input" htmlFor="">Harga Mobil*</p>
                                <input className="form-input" type="text" name="" id="" />
                                <p className="label-input" htmlFor="">Harga Mobil*</p>
                                <input className="form-input" type="text" name="" id="" />
                                <br/><br/>
                                <p className="label-input" htmlFor="">Gambar Mobil Utama*</p>
                                <input className="label-input" type="file" name="" id="" />
                                <p className="notif-upload">Berhasil Upload</p>
                                <p className="label-input" htmlFor="">Gambar Mobil Interior*</p>
                                <input className="label-input" type="file" name="" id="" />
                                <p className="notif-upload">Berhasil Upload</p>
                                <p className="label-input" htmlFor="">Gambar Mobil Ejsteruir*</p>
                                <input className="label-input" type="file" name="" id="" />
                                <p className="notif-upload">Berhasil Upload</p>
                                <button type="submit" className="tombol penuh">APPLY</button>
                            </div>
                        </div>
                    </div>
                <div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    )

}


export default MobilBaru;