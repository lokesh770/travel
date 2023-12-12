import React from "react"
import ReactDOM  from "react-dom/client"
import App from "./app"
import { BrowserRouter } from "react-router-dom"
let rooot=ReactDOM.createRoot(document.getElementById("root"))
rooot.render(
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
)