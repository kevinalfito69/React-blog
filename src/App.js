
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto pt-24'>
    <Home/>
      </div>

    </>
  );
}

export default App;
