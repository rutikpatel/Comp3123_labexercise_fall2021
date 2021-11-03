import logo from './logo.svg';
import './App.css';
import Header from './Student';
import College from './College';
import Course from './Course';

 
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <img src={logo} className="App-logo" alt ="logo"/>
      <Course courseName="Welcome to fullstack development-1" lab="React JS Programming Week9 Lab Exercise"/>
      <Header firstName ="Rutik" lastName ="Patel" color ='red' studentId="101235165"/>
    
      <College collegeName = "George Brown College Toronto"/>
      
      </header>
    </div>
  );
}

export default App;
