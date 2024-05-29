import React from "react";
import ReactDom from 'react-dom/client'
import Header from "../component/Header";
const AppLayout=()=>{
return (
    <div>
         <Header/>
    </div>
)
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)