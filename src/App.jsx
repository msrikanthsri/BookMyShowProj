import {Route} from 'react-router-dom'

import DefaultHOC from './HOC/Default.HOC';

//Page
import Homepage from './pages/Home.page'

// Import css files Globally to use in all other components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Name(){
  return <h1>Hiie</h1>
}
function App(){
 return(
   <>
   <DefaultHOC path="/home" exact component = {Homepage} />
 
  </>
 )
}

export default App;