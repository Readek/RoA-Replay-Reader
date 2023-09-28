import { useState } from 'react';
import './App.css';
import { BotButts } from './components/BotButts';
import { DropArea } from './components/DropArea';
import { ReplayDataInfo } from './components/ReplayDataInfo';

function App() {

  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <div className="App">

      {infoVisible && <ReplayDataInfo />}

      <DropArea />
        
      <BotButts />

    </div>
  );
}

export default App;
