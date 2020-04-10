import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <Button onClick={() => {console.log(123);}}>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button target="_blank" btnType={ButtonType.Link} href="http://baidu.com">Hello</Button>
      <Button disabled btnType={ButtonType.Link} href="http://baidu.com">Hello</Button>
      <hr/>
      <Menu onSelect={(index) => {alert(index);}}>
        <MenuItem index={0}>
          123
        </MenuItem>
        <MenuItem index={1} disabled>
          456
        </MenuItem>
        <MenuItem index={2}>
          789
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
