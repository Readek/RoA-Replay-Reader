import { useState } from 'react';
import './App.css';
import { BotButts } from './components/BotButts';
import { DropArea } from './components/DropArea';
import { ReplayDataInfo } from './components/ReplayDataInfo';

function App() {

  const [infoVisible, setInfoVisible] = useState(false);

  const [replayData, setReplayData] = useState({version : "no"});

  return (
    <div className="App">

      {infoVisible && <ReplayDataInfo fileData={replayData} />}

      <DropArea
        showData={() => setInfoVisible(true)}
        updateData={setReplayData}
      />
        
      <BotButts
        showData={() => setInfoVisible(true)}
        updateData={setReplayData}
      />

    </div>
  );
}

export default App;
