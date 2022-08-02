import './App.css';
import { format } from 'date-fns'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>New dummy paragraph</p>
        <p>
          Today is {format(new Date(), "'Today is a' eeee yyyy-MM-dd HH:mm:ss")}
        </p>
      </header>
    </div>
  );
}

export default App;
