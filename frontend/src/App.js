import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
