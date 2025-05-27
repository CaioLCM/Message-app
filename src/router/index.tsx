import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import LogIn from "../components/Login/LogIn.tsx";
import LogUp from "../components/LogUp/Logup.tsx";
import Menu from "../components/Menu/Menu.tsx";


function RoutesManager(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LogIn></LogIn>}></Route>
            <Route path="/logup" element={<LogUp></LogUp>}></Route>
            <Route path="/menu/:name" element={<Menu></Menu>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesManager;