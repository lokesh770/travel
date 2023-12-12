import { Route, Routes } from "react-router-dom";
import Destiny from "./components/dest";
import Laksha from "./components/lakswadeep";
import Leh from "./components/leh";
import Gokarna from "./components/gokarna";
import Srinagar from "./components/srinagar";
import Pondachary from "./components/pondachary";
let App=()=>{
    return(
        <div>
    <Routes>
    <Route path="/" element={<Destiny></Destiny>}></Route>
    <Route path="/1" element={<Laksha></Laksha>}></Route>
   <Route path="/2" element={<Leh></Leh>} ></Route>
   <Route path="/3" element={<Gokarna></Gokarna>} ></Route>
   <Route path="/4" element={<Srinagar></Srinagar>} ></Route>
   <Route path="/5" element={<Pondachary></Pondachary>} ></Route>
    </Routes>
        </div>
    )
}
export default App;