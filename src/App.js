import './App.css';
import LeftSidebar from './components/Left_sidebar.js';
import RightSidebar from './components/Right_sidebar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
        <div className="nav_bar">
        <LeftSidebar />
        <Dashboard />
        <RightSidebar />
        </div>
    </div>
  );
}

export default App;
