function Testimoni()
{
    return(
        <>
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
        </>
    )
}
export default Testimoni