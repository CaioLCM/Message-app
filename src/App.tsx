import { auth } from "./firebase";
import RoutesManager from "./router";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect } from "react";




function App() {
  return <RoutesManager></RoutesManager>;
}

export default App;
