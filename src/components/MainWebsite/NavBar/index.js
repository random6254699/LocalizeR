// import React, { useState } from 'react';
import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./style.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBarMenuList = () => {
    return (
        <>
            <div className={`${styles.mainNavList}`}>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='text-orange-400 hover:text-orange-700'>
                        Services
                    </DropdownToggle>
                    <DropdownMenu left>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink className='hover:text-orange-700 text-orange-400' tag={Link} to="/about-us">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='hover:text-orange-700 text-orange-400' tag={Link} to="contact-us">
                        Contact Us
                    </NavLink>
                </NavItem>
            </div>
        </>
    )
}



const NavBar = () => {
    const [menuStatus,setMenuStatus] = useState(false);
    function activeMenu(){
        if(menuStatus){
            setMenuStatus(false);
        }else{

            setMenuStatus(true);
        }
    }
    return (
        <>
            {/* <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6"> */}
            <Nav className={`${styles.topNav} `}>
                <NavbarBrand tag={Link} to="/" className=' font-semibold text-2xl text-orange-400 hover:text-orange-700'>LocalizeR</NavbarBrand>
                <div className={`${styles.navList}`}>
                    <NavBarMenuList />
                </div>
                <div className={`${styles.rightNav}`}>
                    <Nav className="flex-grow">
                        <NavItem >
                            <NavLink
                                onClick={()=>activeMenu()}
                                className={`pr-1 cursor-pointer ${styles.hamIcon}`}>
                                <GiHamburgerMenu size={25} />
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className='pr-1 pl-0'><FaRegUser className='mt-1 ml-4 text-orange-400' /></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} className='pr-1 pl-0 hover:text-orange-700 text-orange-400' to="/sign-in">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className='pl-0' to="/sign-up">
                                <span className='text-orange-400'>|</span>
                                <span className='hover:text-orange-700 text-orange-400 pl-1'>Sign Up</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Nav>
            <Nav className={`${styles.mNav} ${menuStatus?styles.active:""} ` }>
                <NavBarMenuList />
            </Nav>
        </>
    )
}

export default NavBar;