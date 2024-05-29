import React from "react";
import ReactDom from 'react-dom/client'
const AppLayout=()=>{
return (
    <h1 className="text-6xl">Hello World</h1>
)
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)