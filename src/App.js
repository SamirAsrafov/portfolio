
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header';


//Komponentler gelecek
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="container-fluid">

      <Navbar />
      <Header />

    </div>

  );
}

export default App;
