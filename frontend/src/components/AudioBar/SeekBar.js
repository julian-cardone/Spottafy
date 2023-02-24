import { useEffect, useRef, useState } from "react";

const SeekBar = ({ currentSong, audioElement }) => {
  // audioElement.current.currentTime = 0;

  const [value, setValue] = useState(0);
  const [zero, setZero] = useState("");

  useEffect(() => {
    setValue(currentSong.progress);
    if (currentSong.length % 60 < 10) {
      setZero(0);
    } else {
      setZero("");
    }
  }, [currentSong]);

  const clickRef = useRef();

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElement.current.currentTime = (divprogress / 100) * currentSong.length;

  };

  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);

  // useEffect(()=> {
  //   setSeconds()
  // },[])

  return (
    <div className="seeking-bar">
      {!!currentSong.ct && (
        <div className="first-number">{`${
          Math.floor(audioElement.current.currentTime / 60) || "0"
        }:${
          Math.floor(((audioElement.current.currentTime / 10) % 60) % 6) || "0"
        }${
          Math.floor((audioElement.current.currentTime % 60) % 10) || "0"
        }`}</div>
      )}
      {!currentSong.ct && <div className="first-number">{`${"-"}:${"-"}`}</div>}
      <div
        className="seeking-bar-wrap"
        onClick={(e) => checkWidth(e)}
        ref={clickRef}
      >
        <div className="seeking-bar-inner">
          <div className="seeking-bar-inner-inner">
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${currentSong.progress + "%"}` }}
              ></div>
            </div>
          </div>
        </div>
        <input
          type="range"
          className="range-audio"
          min="0"
          max="100"
          value={value}
          step="0.01"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        {/* <div
          className="circle-on-seek"
          style={{ left: `${currentSong.progress - 1 + "%"}` }}
        ></div> */}
      </div>
      <div className="second-number">{`${
        Math.floor(currentSong.length / 60) || "-"
      }:${zero}${Math.floor(currentSong.length % 60) || "-"}`}</div>
    </div>
  );
};

export default SeekBar;
