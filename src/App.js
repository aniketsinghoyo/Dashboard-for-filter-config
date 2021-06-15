import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/app-bar';
import Data from './components/data';
import City from './components/cityForConfigLocality';
import PostRe from './postReq'
function App() {

  return (
    <div className="App">
        <ButtonAppBar/>

        <Data/>

    </div>
  );
}

export default App;
