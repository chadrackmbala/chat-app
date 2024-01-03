import '../styles/App.css';
import Home from './home';
import Sidebar from './sidebar';


export default function Layout() {
  return(
    <div className='layout'>
      <Sidebar />
      <Home />
    </div>
  )
}