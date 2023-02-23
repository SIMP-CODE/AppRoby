import car_new from "../../assets/img/car/new.png"
import car_old from "../../assets/img/car/old.png"
import icon2 from "../../assets/img/nav2.jpg"

function MenuAdmin()
{
    return(
        <>
            <div className="menu-admin">
                <div className="baris">
                    <div className="kolom-menu-admin">
                        <a href="/mobil-baru" className="kotak-menu-admin">
                            <img src={car_new} alt="" />
                            <p>MOBIL BARU</p>
                        </a>
                    </div>
                    <div className="kolom-menu-admin">
                        <a href="#" className="kotak-menu-admin">
                            <img src={car_old} alt="" />
                            <p>MOBIL BEKAS</p>
                        </a>
                    </div>
                    <div className="kolom-menu-admin">
                        <a href="#" className="kotak-menu-admin">
                            <img className="icon-menu-admin"  src={icon2} alt="" />
                            <p>GALERI</p>
                        </a>
                    </div>
                    <div className="kolom-menu-admin">
                        <a href="#" className="kotak-menu-admin">
                            <img className="icon-menu-admin"  src={icon2} alt="" />
                            <p>TESTIMONI</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuAdmin