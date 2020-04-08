import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => {console.log(123);}}>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button target="_blank" btnType={ButtonType.Link} href="http://baidu.com">Hello</Button>
      <Button disabled btnType={ButtonType.Link} href="http://baidu.com">Hello</Button>
    </div>
  );
}

export default App;
