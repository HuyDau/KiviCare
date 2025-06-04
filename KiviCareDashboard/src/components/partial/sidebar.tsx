import React, { memo, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../widget/logo';
import VerticalNav from './vertical-nav';
import Scrollbar from 'smooth-scrollbar';
import * as SettingSelector from '../../store/setting/selectors';
import { useSelector } from 'react-redux';

const Sidebar = memo(() => {
    const sidebarColor: string = useSelector(SettingSelector.sidebar_color);
    const sidebarHide: string[] = useSelector(SettingSelector.sidebar_show);
    const sidebarType: string[] = useSelector(SettingSelector.sidebar_type); 
    const sidebarMenuStyle: string = useSelector(SettingSelector.sidebar_menu_style);

    const minisidebar = () => {
        const asideElement = document.getElementsByTagName('ASIDE')[0];
        if (asideElement) {
            asideElement.classList.toggle('sidebar-mini');
        }
    };

    useEffect(() => {
        // Khởi tạo Scrollbar
        const scrollbarElement = document.querySelector('#my-scrollbar') as HTMLElement;
        if (scrollbarElement) {
            Scrollbar.init(scrollbarElement);
        }

        // Định nghĩa hàm xử lý sự kiện resize
        const handleResize = () => {
            const tabs = document.querySelectorAll('.nav');
            const sidebarResponsive = document.querySelector(
                '[data-sidebar="responsive"]'
            ) as HTMLElement | null;

            if (window.innerWidth < 1025) {
                Array.from(tabs, (elem: Element) => { 
                    if (
                        !elem.classList.contains('flex-column') &&
                        elem.classList.contains('nav-tabs') &&
                        elem.classList.contains('nav-pills')
                    ) {
                        elem.classList.add('flex-column', 'on-resize');
                    }
                    return elem; 
                });
                if (sidebarResponsive !== null) {
                    if (!sidebarResponsive.classList.contains('sidebar-mini')) {
                        sidebarResponsive.classList.add('sidebar-mini', 'on-resize');
                    }
                }
            } else {
                Array.from(tabs, (elem: Element) => { 
                    if (elem.classList.contains('on-resize')) {
                        elem.classList.remove('flex-column', 'on-resize');
                    }
                    return elem;
                });
                if (sidebarResponsive !== null) {
                    if (
                        sidebarResponsive.classList.contains('sidebar-mini') &&
                        sidebarResponsive.classList.contains('on-resize')
                    ) {
                        sidebarResponsive.classList.remove('sidebar-mini', 'on-resize');
                    }
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getCombinedClassNames = (classNames: string[] | undefined): string => {
        if (Array.isArray(classNames) && classNames.length > 0) {
            return classNames.join(' ');
        }
        return ''; 
    };

    return (
        <Fragment>
            <aside
                className={`
                    ${sidebarColor}
                    ${getCombinedClassNames(sidebarType)}
                    ${sidebarMenuStyle}
                    ${getCombinedClassNames(sidebarHide) ? 'sidebar-none' : 'sidebar'}
                    sidebar-base
                `}
                data-sidebar="responsive"
                data-toggle="main-sidebar"
            >
                <div className="sidebar-header d-flex align-items-center justify-content-start position-relative">
                    <Link to="/" className="navbar-brand"> {/* Link tới "/" hoặc đường dẫn chính của ứng dụng */}
                        <Logo />
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                        <i className="icon">
                            <svg className="icon-20 icon-arrow" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 19L8.5 12L15.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </i>
                    </div>
                </div>

                <div className="sidebar-body pt-0 data-scrollbar" id="my-scrollbar">
                    <div className="sidebar-list">
                        <VerticalNav />
                    </div>
                </div>

                <div className="sidebar-footer"></div>
            </aside>
        </Fragment>
    );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;