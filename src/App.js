import logo from './logo.svg';
import './App.css';
import LineGraph from './components/LineGraph';
import DynamicLineGraph from './components/DynamicLineGraph';
import DynamicBarGraph from './components/DynamicBarGraph';
import DynamicAreaGraph from './components/DynamicAreaChart';
import BarGraph from './components/BarGraph';

function App() {
  return (
    <div className="App" >
      {/* <LineGraph/> */}

      <DynamicLineGraph/>
      <DynamicBarGraph/>
      <DynamicAreaGraph/>
      <LineGraph/>
      <BarGraph/>
    </div>
  );
}

export default App;
