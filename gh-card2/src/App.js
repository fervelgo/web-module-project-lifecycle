import './App.css';
import Card from './components/Card';
import Followers from './components/Followers';

function App() {
  return (
    <div className="App">
      <h1>GitHubUserCard</h1>
      <Card />
      {<Followers />}
    </div>
  );
}

export default App;
