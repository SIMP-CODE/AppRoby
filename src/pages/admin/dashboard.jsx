import HeaderAdmin from "../../components/admin/header";
import MenuAdmin from "../../components/admin/menu";
import FooterAdmin from "../../components/admin/footer";

function Admin() {
    return (
        <>
            <div className="container">
                <div>
                    <HeaderAdmin />
                    <MenuAdmin />
                </div>
                <div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    )

}


export default Admin;