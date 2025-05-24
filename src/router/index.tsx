import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import LogIn from "../components/LogIn";
import LogUp from "../components/Logup";
import Menu from "../components/Menu";


function RoutesManager(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LogIn></LogIn>}></Route>
            <Route path="/logup" element={<LogUp></LogUp>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesManager;