import React from 'react';
import { useTranslation } from "react-i18next";

const HeaderNavbar = () => {
    const { t } = useTranslation("common");
     return (
         <div className="header__container">
                <a href="./" className="header__logo">
                    <img src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png" alt="logo"/>
                </a>
                <div className="header__nav">
                    <ul className="nav header__nav__left">
                        <li ><a href="./">{t("navbar.showtimes")}</a></li>
                        <li ><a href="./">{t("navbar.movies")}</a></li>
                        <li ><a href="./">{t("navbar.thecinema")}</a></li>
                        <li ><a href="./">{t("navbar.sale")}</a></li>
                        <li ><a href="./">{t("navbar.member")}</a></li>
                    </ul>
                    <ul className="nav header__nav__right">
                        <li><a href="./">{t("navbar.login")}</a></li>
                        <li><a href="./">{t("navbar.registration")}</a></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
     )
}

export default HeaderNavbar;