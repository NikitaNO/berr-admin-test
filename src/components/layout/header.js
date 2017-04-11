import React from 'react'
import {Menu, Icon, Popover, Badge, M} from 'antd'
import styles from './main.less'
import Menus from './menu'
import Logo from './logo'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup;
function Header({
  user,
  logout,lock,SignUp,
  switchSider,
  siderFold,
  isNavbar,
  menuPopoverVisible,
  location,
  switchMenuPopover,
  navOpenKeys,
  changeOpenKeys
}) {
  let handleClickMenu = e => e.key === 'logout' && logout()

  const menusProps = {
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys
  }

  const wrapperStyleLogo = {
    float: 'left',
    background: '#f8f8f8',
    boxShadow: '2px 3px 20px 0px rgba(0,0,0,0.75);',
    padding: '5px 50px',
    margin: '10px',
    borderWidth: '2px',
    borderColor: '#ddd',
    borderStyle: 'solid'
  }

  const textStyleLogo = {
    fontSize: '14px',
    textTransform: 'uppercase'
  }

  const flexWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ffffff'
  }

  const menuItem = {
    borderRightWidth: '2px',
    borderRightStyle: 'solid'
  }

  return (
    <div className={styles.header}>
      <div style={flexWrapper}>
        <Logo
          style={wrapperStyleLogo}
          textStyleLogo={textStyleLogo}
        />
        <div>
          <Menu className='header-menu' mode='horizontal' onClick={handleClickMenu}>
            {/*title={<span> <Icon type="user"/>John Doe </span>}>*/}
            <Menu.Item key="profile">
              <p>Welcome,
                <span> <Icon type="user"/>John Doe </span>
              </p>
            </Menu.Item>
            <Menu.Item key='notification'>
              <span>
                <Badge count={5}>
                  <Icon type="notification"/>
                </Badge>
              </span>
            </Menu.Item>
            <Menu.Item key="profile" > <a href="#/pages/profile"  rel="noopener noreferrer">Profile</a></Menu.Item>
            <Menu.Item key='logout'>
              <a>Logout</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
