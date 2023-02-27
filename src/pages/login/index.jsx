import FooterAdmin from "../../components/admin/footer";
import icon_user from   "../../components/assets/img/login/login-username.png"
import icon_pass from   "../../components/assets/img/login/login-password.png"

function Login() {
    return (
        <>
            <div className="container">
                <div>
                    <div className="login-form">
                        <h2>SELAMAT DATANG DI HALAMAN LOGIN ADMIN</h2>
                        <div className="wrap-form-login">
                            <div className="login-form-row">
                                <div className="login-form-col-icon">
                                    <div className="icon-login">
                                        <img src={icon_user} alt="" />
                                    </div>
                                </div>
                                <div className="login-form-col-form">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="wrap-form-login">
                            <div className="login-form-row">
                                <div className="login-form-col-icon">
                                    <div className="icon-login">
                                        <img src={icon_pass} alt="" />
                                    </div>
                                </div>
                                <div className="login-form-col-form">
                                    <input type="password" />
                                </div>
                            </div>
                        </div>
                        <a href="">Lupa Password</a>
                        <div className="wrap-tombol-login">
                            <button className="tombol-login">LOGIN</button>
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

export default Login;