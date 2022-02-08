import './App.css';

import Get from './fetch';

import Age from './age';

import{

BrowserRouter as Router,

Routes,

Route

} from "react-router-dom";



function App() {

return (

<Router>

<Routes>

< Route exact path="/" element={<Get/>}/>

< Route exact path="/age" element={<Age/>}/>

</Routes>

</Router>



);

}



export default App;