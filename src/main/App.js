import React from "react";
import ReactDom from 'react-dom/client'
import Header from "../component/Header";
import Contact from "../component/Contact";
const AppLayout=()=>{
return (
    <div>
         <Header/>
         <Contact/>
    </div>
)
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)