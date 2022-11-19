import React from 'react';
import logo from './logo.svg';
import './App.css';
const TodaysDate = React.lazy(() => import('./TodaysDate'));

function App() {
  const [showTodayDate, setShowTodayDate] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>setShowTodayDate(!showTodayDate)}>What day is Today?</button>
        <React.Suspense fallback="Loading.....">{showTodayDate && <TodaysDate/>}</React.Suspense>
      </header>
    </div>
  );
}

export default App;
