import poto_profil from "../../assets/img/galery/galery6.jpg"

function HeaderAdmin()
{
    return(
        <>
            <div className="header-admin">
                <div className="bingkai-profil">
                    <img src={poto_profil} alt="" />
                </div>
                <p>RENDY PRATAMA</p>
            </div>
        </>
    )
}
export default HeaderAdmin