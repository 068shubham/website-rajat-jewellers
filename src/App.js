import './App.css';
import { appName } from './App.json';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header className="App-header"
        appName={appName}>
      </Header>
    </div>
  );
}

export default App;
