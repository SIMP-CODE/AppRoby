import HeaderAdmin from "../../../components/admin/header";
import FooterAdmin from "../../../components/admin/footer";

function FormGaleri() {
    return (
        <>
            <div className="container">
                <div>
                    <HeaderAdmin />
                    <div className="baris-label">
                        <div className="label-kondisi">
                            GALLERY
                        </div>
                    </div>
                        <div className="menu-admin">
                            <div className="form">
                                <p className="label-input" htmlFor="">Insert Galery</p>
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


export default FormGaleri;