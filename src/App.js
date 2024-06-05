import logo from './logo.svg';
import './App.css';
import Settings from "./Component/Settings/Setting"
import Account  from './Component/Account/Account';
function App() {
  return (
    <div className="App">
      <div className="Settings">
    <Settings/>
    </div>
      <div className="Account">
      <Account/>
      </div>
    
  
    </div>
  );
}

export default App;
