import { BrowserRouter } from "react-router-dom";
import { App } from "./app.routes";
import { AppAuth } from "./auth.routes";


export function Routes(){
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
}