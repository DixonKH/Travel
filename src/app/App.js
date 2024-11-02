// useContext() = React Hook that allows you to share values between multiple levels of components 
//                without passing props throuhg each level

// PROVIDER COMPONENT:
// 1. import React, {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//            <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENT:  
// 1. import React, {useContext} from 'react';  
// 2. import {MyContext} from '/ComponentA';
// 3. const value = useContext(MyContext);

import React from "react";
import "../../src/index.css";
import ComponentA from "./components/ComponentA";

function App() {

  return (
    <div>
      <ComponentA />
    </div>
  );
}

export default App;
