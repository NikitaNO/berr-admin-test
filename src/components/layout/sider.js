import React from 'react'
import {Icon, Switch} from 'antd'
import styles from './main.less'
import {config} from '../../utils'
import Menus from './menu'

function Sider({siderFold, lightTheme, location, changeTheme,changeLock, navOpenKeys, changeOpenKeys}) {
  const menusProps = {
    siderFold,
    lightTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  }
  return (
    <div>
      <Menus {...menusProps}/>
    </div>
  )
}

export default Sider
