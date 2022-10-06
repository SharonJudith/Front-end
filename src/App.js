import home from './home.jpg';
import Vector from './Vector.png';
import rate from './rate.png';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={Vector} className="App-logo" alt="logo" /><p className="my-Crib">myCrib</p>
      <p className="add-hostel">Add Hostel</p> 
      <a href="App.js" className="login">Login</a>

      <div className="vl"></div>

      <a href="App.js" className="sign-up">Signup</a>
        
      </header>

      <body>
      <img src={home} className="App-background" alt="background" />

      <div className="box">Stays</div>
      <div className="box1"> <img src={rate} className="Ratings"/>Ratings</div>
      <div className="box2">Facilities</div>
      <div className="box-content"></div>
      </body>
    </div>
  );
}

export default App;
