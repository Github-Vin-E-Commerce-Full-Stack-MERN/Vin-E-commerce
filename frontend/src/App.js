import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <div><Header /></div><br />

      <main className="content">
        <Outlet />
      </main>
      <div><Footer /></div>
    </>
  );
}

export default App;
