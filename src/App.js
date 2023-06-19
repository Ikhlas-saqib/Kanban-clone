import "./App.css";
import Sidebar from './components/sideBar/sidebar.js';
import Header from './components/header/header.js';

function App() {
  return (
    <div>
      <div className='sidebar'>
        <Sidebar />
        <Header />
      </div>
    </div>
  );
}

export default App;
