import React, { memo, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/partial/header'
import Sidebar from "../components/partial/sidebar";
import Footer from "../components/partial/footer";
import SubHeader from "../components/partial/sub-header";
import SettingOffCanvas from '../components/setting/SettingOffCanvas'
import * as SettingSelector from "../store/setting/selectors";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DefaultLayout = memo((props) => {
    const sidebarColor = useSelector(SettingSelector.header_banner);
    const location = useLocation()
    const pageLayout = useSelector(SettingSelector.page_layout);
    return (
        <Fragment>
            <Sidebar />
            <main className="main-content">
                <div className={`position-relative iq-banner ${sidebarColor}`}>
                    {location.pathname !== '/component' && < Header />}
                    <SubHeader />
                </div>
                <div className={` ${pageLayout} content-inner pb-0`} id="page_layout">
                    <Outlet />
                </div>
                <SettingOffCanvas BannerStyle={true} />
                <Footer />
            </main>
        </Fragment>
    )
})

DefaultLayout.displayName = "DefaultLayout"
export default DefaultLayout