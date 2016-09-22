import React from 'react'
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <AppBar
    title="The Daily Reader"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    titleStyle={{textAlign: 'center'}}
  />
)

export default Header
