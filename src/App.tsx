import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <div className="App">
      <Icon icon="arrow-down" theme="primary" size="10x" />
      <Menu onSelect={(index) => {alert(index);}} defaultOpenSubMenu={['2']}>
        <MenuItem>
          123
        </MenuItem>
        <MenuItem disabled>
          456
        </MenuItem>
        <SubMenu title="dorpdown">
          <MenuItem>
            11
          </MenuItem>
          <MenuItem>
            22
          </MenuItem>
        </SubMenu>
        <MenuItem>
          789
        </MenuItem>
      </Menu>
      {/* <hr/>
      <Button onClick={() => {console.log(123);}}>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button target="_blank" btnType={ButtonType.Link} href="http://baidu.com">Hello</Button>
      <Button disabled btnType={ButtonType.Link} href="http://baidu.com">Hello</Button> */}
    </div>
  );
}

export default App;
