import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
   <>
    <div className='App'>
      <NavbarComp />
      <h1 className="btn btn-success">Hello</h1>
    </div>
   </>
  );
}

export default App;
