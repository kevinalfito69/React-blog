import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Create from './component/Create/Create';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import BlogDetail from './component/BlogDetail/BlogDetail';

function App() {
  return (
    
    <Router>
      <Navbar />
        <div className='container mx-auto pt-24 px-4 pb-28'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/blog/:id" element={<BlogDetail/>}/>
          </Routes>
        </div>
    </Router> 
  );
}

export default App;
