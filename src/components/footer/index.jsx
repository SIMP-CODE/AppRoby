import fb from '../assets/img/link-fb.png'
import ig from '../assets/img/link-ig.png'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer-block">
                <div className="footer-baris">
                    <div className="footer-kolom">
                        <div className="footer-kolom-block">
                            <div className="footer-kolom-head">
                                <p>USEFUL LINKS</p>
                            </div>
                            <div className="footer-link">
                                <div className="footer-icon-link">-</div>
                                <p>HOME</p>
                            </div>
                            <div className="footer-link">
                                <div className="footer-icon-link">-</div>
                                <p>MOBIL BEKAS</p>
                            </div>
                            <div className="footer-link">
                                <div className="footer-icon-link">-</div>
                                <p>GALERI</p>
                            </div>
                            <div className="footer-link">
                                <div className="footer-icon-link">-</div>
                                <p>TEST DRIVE</p>
                            </div>
                            <div className="footer-link">
                                <div className="footer-icon-link">-</div>
                                <p>INFO DEREK</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-kolom">
                        <div className="footer-kolom-block">
                            <div className="footer-kolom-head">
                                <p>TOYOTA MEDAN</p>
                            </div>
                            <p className='footer-alamat'>Jalan Balai Kota No. 2 A Medan</p>
                            <a href='https://www.facebook.com/profile.php?id=100048874965914&mibextid=ZbWKwL' className="footer-social-media">
                                <div className="footer-social-icon">
                                    <img src={fb} alt="" />
                                </div>
                                    <p>Rendi Pratama</p>
                            </a>
                            <a href='https://www.instagram.com/rendipratama93' className="footer-social-media">
                                <div className="footer-social-icon">
                                    <img src={ig} alt="" />
                                </div>
                                    <p>@Rendipratama93</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-haki">
            <p>© Copyright SIMP CODE Reserved Designed by SIMP CODE</p>
        </div>
        </>
    );
}
export default Footer