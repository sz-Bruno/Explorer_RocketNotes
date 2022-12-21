import { BrowserRouter } from "react-router-dom";
import { App } from "./app.routes";
import { AppAuth } from "./auth.routes";
import {useAuth} from "../hooks/Auth"

export function Routes(){
    const {user}= useAuth()
    return(
        <BrowserRouter>
        {user? <App/>:<AppAuth/>}
        </BrowserRouter>
    )
}