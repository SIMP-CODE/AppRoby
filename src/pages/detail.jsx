// mobil
import Navigator from "../components/navigator";
import fitur0 from "../components/assets/img/fiture/fitur_rush0.jpg"
import fitur1 from "../components/assets/img/fiture/fitur_rush1.jpg"
import fitur2 from "../components/assets/img/fiture/fitur_rush2.jpg"
import fitur3 from "../components/assets/img/fiture/fitur_rush3.jpg"
import Footer from "../components/footer";

function Detail()
{
    return(
        <>
            <Navigator/>
            <div className="gambar-detail">
                <img src={fitur0} alt="" />
            </div>
            <div className="gambar-detail">
                <img src={fitur1} alt="" />
            </div>
            <div className="gambar-detail">
                <img src={fitur2} alt="" />
            </div>
            <div className="gambar-detail">
                <img src={fitur3} alt="" />
            </div>
            <Footer/>
        </>
    )
}

export default Detail;