import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Business />
    </div>
  );
}

export default App;
