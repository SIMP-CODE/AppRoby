import HeaderAdmin from "../../components/admin/header";
import car_new from "../../components/assets/img/car/new.png"
import car_old from "../../components/assets/img/car/old.png"
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
                                    <a href="#" className="kotak-menu-admin">
                                        <img src={car_new} alt="" />
                                        <div className="mobil-detail">
                                            <div className="baris">
                                                <div className="kolom-detail-mobil-field">
                                                    <div>Nama Mobil</div>
                                                </div>
                                                <div className="kolom-detail-mobil-value">
                                                    <div>: Vios</div>
                                                </div>
                                            </div>
                                            <div className="baris">
                                                <div className="kolom-detail-mobil-field">
                                                    <div>Type Mobil</div>
                                                </div>
                                                <div className="kolom-detail-mobil-value">
                                                    <div>: xxx-xxx</div>
                                                </div>
                                            </div>
                                            <div className="baris">
                                                <div className="kolom-detail-mobil-field">
                                                    <div>Harga Mobil</div>
                                                </div>
                                                <div className="kolom-detail-mobil-value">
                                                    <div>: Rp. 780.000.000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="kolom-menu-admin">
                                    <a href="#" className="kotak-menu-admin">
                                        <img src={car_old} alt="" />
                                        <p>MOBIL BEKAS</p>
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