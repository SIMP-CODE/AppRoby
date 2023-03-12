import Top from "../components/interface/top"
import Slider from '../components/slider'
import Info from "../components/interface/sales"
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
                        
                    </div>
                    <div className="content-col-sales">
                        <div className="sales-profile-img">
                            <img src={process.env.PUBLIC_URL + '/img/testi/sales-profile.png'} alt="sales-profile" />
                        </div>
                        <div className="sales-testi-row">
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="testi-sales1" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales1.png'} alt="testi-sales1" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales2.png'} alt="testi-sales2" />
                            </div>
                            <div className="sales-testi-col">
                                <img src={process.env.PUBLIC_URL + '/img/testi/testi-sales2.png'} alt="testi-sales2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom/>
        </>
    )
}
export default Coba