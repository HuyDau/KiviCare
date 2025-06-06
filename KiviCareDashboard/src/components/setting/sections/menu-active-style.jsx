import React,{memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'

// Images
import image9 from '/assets/images/settings/dark/05.png'
import image10 from '/assets/images/settings/light/05.png'
import image11 from '/assets/images/settings/dark/06.png'
import image12 from '/assets/images/settings/light/06.png'
import image13 from '/assets/images/settings/dark/07.png'
import image14 from '/assets/images/settings/light/07.png'
import image15 from '/assets/images/settings/dark/08.png'
import image16 from '/assets/images/settings/light/08.png'
import image17 from '/assets/images/settings/dark/09.png'
import image18 from '/assets/images/settings/light/09.png'
import image19 from '/assets/images/settings/dark/15.png'
import image20 from '/assets/images/settings/light/15.png'

const MenuActiveStyle = memo((props) => {
    return (
        <Fragment>
            <h6 className="mt-4 mb-3">Active Menu Style</h6>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Rounded One Side" className="text-center" labelclassName="p-0" id="navs-rounded" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-rounded" >
                    <img src={image11} alt="rounded-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image12} alt="rounded-one-side" className={` mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Rounded All" className="text-center" labelclassName="p-0" id="navs-rounded-all" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-rounded-all" >
                    <img src={image13} alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image14} alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Pill One Side" className="text-center" labelclassName="p-0" id="navs-pill" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-pill" >
                    <img src={image15} alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image16} alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Pill All" className="text-center" labelclassName="p-0" id="navs-pill-all" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-pill-all" >
                    <img src={image17} alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image18} alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Text Color" className="text-center" labelclassName="p-0" id="text-hover" defaultChecked={props.sidebarMenuStyle} value="text-hover" >
                    <img src={image9} alt="Text Hover" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image10} alt="Text Hover" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Full Width" className="text-center" labelclassName="p-0" id="navs-full-width" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-full-width" >
                    <img src={image19} alt="Full Width" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image20} alt="Full Width" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

MenuActiveStyle.displayName="MenuActiveStyle"
export default MenuActiveStyle