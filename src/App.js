  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import Home from './components/pages/Home';
  import About from './components/pages/About';
  import User from './components/pages/User';
  import NotFound from './components/pages/NotFound';
  import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { GithubProvider } from './components/contexts/githubContext/GithubContext';


function App() {
  return (
    <GithubProvider>
      <div className='w-screen h-full p-0'>
      <Router>
        <div className="flex flex-col justify-between w-screen h-screen">
          <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/*' element={<NotFound />}></Route>  
            </Routes>
          <Footer/>
        </div>
        
      </Router>
      </div>
      </GithubProvider>
  ) 
}

export default App;
