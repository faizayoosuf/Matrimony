import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import Registration from "./Registration";
import Log from "./Log";
import Search from "./Search";
import Details from "./Details";

export default function Navigation(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/Registration" element={<Registration/>}></Route>
        <Route path="/Log" element={<Log/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
        <Route path="/Details" element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
}