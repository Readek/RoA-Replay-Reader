import { useState } from 'react';
import './App.css';
import { BotButts } from './components/BotButts';
import { DropArea } from './components/DropArea';
import { ReplayDataInfo } from './components/ReplayDataInfo';

function App() {

  const [infoVisible, setInfoVisible] = useState(false);

  const [replayData, setReplayData] = useState({});

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

      <div className='botLinksDiv'>

      <a href="https://github.com/Readek/RoA-Replay-Reader">
            <div id="githubButton" className="socialButt" title='Check the repo!'>
                <svg id="githubIcon" viewBox="0 0 24 24">
                    <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"/>
                </svg>
            </div>
        </a>

        <a href="https://mstdn.social/@Readek">
            <div id="mastoButton" className="socialButt" title='Check my Mastodon!'>
                <svg id="mastoIcon" viewBox="38.9 39.3 138.63 101.73">
                    <path d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/>
                </svg>
            </div>
        </a>      

        <a href="https://ko-fi.com/readek">
            <div id="kofiButton" className="socialButt" title='Support me! :D'>
                <svg id="kofiIcon" viewBox="0 0 32 32">
                    <path d="M31.844 11.932c-1.032-5.448-6.48-6.125-6.48-6.125h-24.4c-0.808 0-0.907 1.063-0.907 1.063s-0.109 9.767-0.027 15.767c0.22 3.228 3.448 3.561 3.448 3.561s11.021-0.031 15.953-0.067c3.251-0.568 3.579-3.423 3.541-4.98 5.808 0.323 9.896-3.776 8.871-9.219zM17.093 16.615c-1.661 1.932-5.348 5.297-5.348 5.297s-0.161 0.161-0.417 0.031c-0.099-0.073-0.14-0.12-0.14-0.12-0.595-0.588-4.491-4.063-5.381-5.271-0.943-1.287-1.385-3.599-0.119-4.948 1.265-1.344 4.005-1.448 5.817 0.541 0 0 2.083-2.375 4.625-1.281 2.536 1.095 2.443 4.016 0.963 5.751zM25.323 17.251c-1.24 0.156-2.244 0.036-2.244 0.036v-7.573h2.359c0 0 2.631 0.735 2.631 3.516 0 2.552-1.313 3.557-2.745 4.021z"/>
                </svg>
            </div>
        </a>

        <a href="https://discord.gg/EX22CTBNrM">
            <div id="discordButton" className="socialButt" title='Yeah theres a discord for my projects too'>
                <svg id="discordIcon" viewBox="0 0 48 48" width="48px" height="48px">
                    <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/>
                </svg>
            </div>
        </a>

      </div>

    </div>
  );
}

export default App;
