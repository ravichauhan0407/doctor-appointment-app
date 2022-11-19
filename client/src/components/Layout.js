import { Badge, Col,Row } from "antd";
import React, { Children, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import "./Layout.css";
export const Layout = (props) => {
    const location=useLocation()
    const [collapsed,setCollapsed]=useState(true)

    const {user}=useSelector((state)=>state.user)

    const navigate=useNavigate()
    const dispatch=useDispatch()
 

  const adminMenu=
  [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
       name:"Users",
       path:"/users",
       icon:"ri-user-line"
    },
    {
      name:"Doctors",
      path:"/doctors",
      icon:"ri-hospital-line"
   }
    ,
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-profile-line",
    }
  ] 

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-profile-line",
    }
  ];

  const logout=()=>
  {
        dispatch(showLoading())

        localStorage.removeItem("token")

        dispatch(hideLoading())
        
        navigate('/login')
  }

  const menuToBeRendered=user?.isadmin?adminMenu:userMenu;
  return (
    <div className="main">
      <div className="d-flex layout ">
        <div className={(collapsed)?'sidebar':'collapsed-sidebar'}>
              {/* <div>{collapsed&&<h2 className="text-light">HWEALTH</h2>}
                   {!collapsed&&<h2>HW</h2>}
              </div> */}
              <div>
                 {menuToBeRendered.map((menu)=>
                 {
                    const activeClass=location.pathname==menu.path?'active-menu-item':'';
                    return (<div className={`d-flex menu-item ${activeClass}`}>
                               <Link to={menu.path}>
                              <i class={menu.icon}></i>
                              {collapsed&&menu.name}</Link>
                    </div>)
                 })}
              </div>
              <div className={`d-flex menu-item`}>
                               <div onClick={()=>{logout()}} className='logout' >
                              <i class='ri-logout-box-line'></i>
                              {collapsed&&'Logout'}</div>
              </div>
        </div>
        <div className="content">
          <div className="header">
          {collapsed?<i className="ri-close-line close-menu" onClick={()=>setCollapsed(false)}></i>:<i className="ri-menu-3-line close-menu" onClick={()=>setCollapsed(true)}></i>}
          <Row  gutter={10} className='px-3'>
          <Col>
          <div className="profile">{user?user.name:'user'}</div></Col>
          <Col>
          <Badge count={user?user.unseennotification.length:0} overflowCount={5}>
          <i class="ri-notification-2-line close-menu"></i>
          </Badge>
          </Col>
          </Row>
          </div>
          <div className="body p-3">
              {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
