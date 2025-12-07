import { useState } from 'react';
import User from './user';

function App() {


  return (
    <div>
      <User name="ram" age={20} email="ram@gmail.com"
      />
      <User name="shyam" age={22} email="shyam@gmail.com"
      />
      <User name="hari" age={25} email="hari@gmail.com"
      />
      <User name="gopal" age={28} email="gopal@gmail.com"
      />

    </div>

  );
}

export default App;
