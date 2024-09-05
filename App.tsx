import { StatusBar } from "expo-status-bar";
import Home  from "./app"

export default function App(){
    return(
        <>

        <Home></Home>
        <StatusBar hidden={true} />

        </>
    )

}