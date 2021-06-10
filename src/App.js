import './App.css';
import Left_sidebar from './components/Left_sidebar.js';
import Right_sidebar from './components/Right_sidebar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
        <div className="nav_bar">
        <Left_sidebar />
        <Dashboard />
        <Right_sidebar />
        </div>
    </div>
  );
}

export default App;
