import { readReplayFile, replayData } from "../scripts/Replay Reader.mjs";

export function BotButts() {
  return (
    <div className='BotButts'>
      <LocalFileButt />
      <DemoFileButt />
    </div>
  );
}

function LocalFileButt() {

  const handleClick = () => {
    console.log("open file dialog");
  }

  return (
    <button
      className="BotButton"
      onClick={handleClick}
    >
      Or choose a file
    </button>
  );

}

function DemoFileButt() {

  const demoFile = `021060322560717092023REPLAY 2023-9-17 (22:56)                                                                                                                                                    00000699320000000000
011030820110000000565000000000
HFireicey                        MARK  00203030310004000227A35BCFFA6D2FF001EDD00007F0EA5                  000000000000000000000 20000000000000000000000000000000000000000
heres where the inputs go but we dont actually read this
HTheDripCollector                Drip  004420042200001302927272DC0C2D747472DC0C2E6DA1947                  000000000000000000000 10000000000000000000000000000000000000000
heres where the inputs go but we dont actually read this
0
0
7261,2,1,2612,4,2,2859,4,2,5127,4,2,7083,
  `

  const handleClick = async () => {
    readReplayFile(demoFile);
  }

  return (
    <button
      className="BotButton"
      onClick={handleClick}
    >
      Or display a demo
    </button>
  );

}
