import HeaderAdmin from "../../components/admin/header";
import car_new from "../../components/assets/img/car/new.png"
import nav_plus from "../../components/assets/img/nav5.jpg"
import FooterAdmin from "../../components/admin/footer";

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
                            <div className="baris">
                                <div className="kolom-menu-admin">
                                    <div href="#" className="kotak-menu-admin">
                                        <img src={car_new} alt="" />
                                        <div className="mobil-detail">
                                            <div className="kolom-detail-info-mobil">
                                                <p>Vios</p>
                                            </div>
                                            <div className="kolom-detail-info-mobil">
                                                <p>Type : xxx-xxx</p>
                                            </div>
                                            <div className="kolom-detail-info-mobil">
                                                <p>Rp. 780.000.000</p>
                                            </div>
                                        </div>
                                        <div className="bariss">
                                            <div className="kolomm-tombol-fit">
                                                <a className="tombol-fit" href="">Edit</a>
                                            </div>
                                            <div className="kolomm-tombol-fit">
                                                <button className="tombol-fit">Hapus</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="kolom-menu-admin">
                                    <a href="/form-mobil_baru" className="kotak-menu-admin">
                                        <div className="tombol-menu-tambah-mobil">
                                            <div className="icon_tambah">
                                                <img className="gambar-tambah" src={nav_plus} alt="" />
                                            </div>
                                            <div className="text_tambah">
                                                <p>Tambah Mobil</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
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