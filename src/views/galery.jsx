import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
import Sales from "../components/interface/testimoni"
import Bottom from "../components/interface/bot"

function Galery()
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
                            <div className="baris">
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
                                <div className="gambar-galery">
                                    <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="Toyota_Tagline" />
                                </div>
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
export default Galery