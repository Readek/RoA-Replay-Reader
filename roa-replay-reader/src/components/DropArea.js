import { useState } from "react";
import { readReplayFile } from "../scripts/Replay Reader.mjs";

export function DropArea({showData, updateData, padValue, setPadValue}) {

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      updateData(readReplayFile(await e.dataTransfer.files[0].text()))
      showData();
      setPadValue(5);
    }
  };


  return (
    <div
      className={"DropArea" + (dragActive ? " draggin" : "" )}
      onDragEnter={handleDrag}
      style={{padding: padValue + "px 100px"}}
    >
      <p>Drop a .roa file here!</p>
      {dragActive && <div
        id="drag-file-element"
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      ></div> }
    </div>
  );

}
