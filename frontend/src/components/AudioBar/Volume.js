import { useEffect, useRef, useState } from "react";

const VolumeButtons = ({ audioElement, currentSong }) => {
  const [value, setValue] = useState(currentSong.volume*100);
  const volume1 = "M 9.741 0.85 a 0.75 0.75 0 0 1 0.375 0.65 v 13 a 0.75 0.75 0 0 1 -1.125 0.65 l -6.925 -4 a 3.642 3.642 0 0 1 -1.33 -4.967 a 3.639 3.639 0 0 1 1.33 -1.332 l 6.925 -4 a 0.75 0.75 0 0 1 0.75 0 Z m -6.924 5.3 a 2.139 2.139 0 0 0 0 3.7 l 5.8 3.35 V 2.8 l -5.8 3.35 Z m 8.683 4.29 V 5.56 a 2.75 2.75 0 0 1 0 4.88 Z"
  const volume2 = "M 11.5 13.614 a 5.752 5.752 0 0 0 0 -11.228 v 1.55 a 4.252 4.252 0 0 1 0 8.127 v 1.55 Z"
  const volume3 = "M 13.86 5.47 a 0.75 0.75 0 0 0 -1.061 0 l -1.47 1.47 l -1.47 -1.47 A 0.75 0.75 0 0 0 8.8 6.53 L 10.269 8 l -1.47 1.47 a 0.75 0.75 0 1 0 1.06 1.06 l 1.47 -1.47 l 1.47 1.47 a 0.75 0.75 0 0 0 1.06 -1.06 L 12.39 8 l 1.47 -1.47 a 0.75 0.75 0 0 0 0 -1.06 Z"
  const volume4 = "M 10.116 1.5 A 0.75 0.75 0 0 0 8.991 0.85 l -6.925 4 a 3.642 3.642 0 0 0 -1.33 4.967 a 3.639 3.639 0 0 0 1.33 1.332 l 6.925 4 a 0.75 0.75 0 0 0 1.125 -0.649 v -1.906 a 4.73 4.73 0 0 1 -1.5 -0.694 v 1.3 L 2.817 9.852 a 2.141 2.141 0 0 1 -0.781 -2.92 c 0.187 -0.324 0.456 -0.594 0.78 -0.782 l 5.8 -3.35 v 1.3 c 0.45 -0.313 0.956 -0.55 1.5 -0.694 V 1.5 Z"
  const [vol1, setVol1] = useState(volume1);
  const [vol2, setVol2] = useState(volume2);

  useEffect(()=>{
    setValue(currentSong.volume*100)
  },[currentSong])

  const muteAudio = () => {
    if (audioElement.current.muted === false) {
      audioElement.current.muted = true;
      audioElement.current.volume = 0;
      setVol1(volume3);
      setVol2(volume4);
    } else {
      audioElement.current.muted = false;
      audioElement.current.volume = 1;
      setVol1(volume1);
      setVol2(volume2);
    }
  };

  

  const clickRef = useRef();

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    if ((divprogress / 100) > 1){
      audioElement.current.volume=1;
    } else if ((divprogress / 100) <1){
      audioElement.current.volume=0;
    } else {
      audioElement.current.volume = divprogress / 100;
    }
  };
console.log(currentSong.volume)
  return (
    <>
      <button className="mute-button" onClick={muteAudio}>
        <svg
          role="presentation"
          height="16"
          width="16"
          viewBox="0 0 16 16"
          className="svg-mute"
        >
          <path
            className="mute-svg-1"
            d={vol1}
          ></path>
          <path
            className="mute-svg-2"
            d={vol2}
          ></path>
        </svg>
      </button>
      <div
        className="volume-bar-slider-container"
        onClick={(e) => checkWidth(e)}
        ref={clickRef}
      >
        <div className="volume-bar-slider">
          <div className="progress-bar">
            <div className="progress-bar-back">
              <div className="progress-bar-background">
                <div
                  className="progress-bar-background-inner"
                  style={{ width: `${currentSong.volume * 100 + "%"}` }}
                >
                </div>
              </div>
            </div>
          </div>
                <input
                  type="range"
                  className="range-audio-2"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                ></input>
        </div>
      </div>
    </>
  );
};

export default VolumeButtons;
