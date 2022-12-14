import { useEffect, useRef, useState } from "react";

const SeekBar = ({ currentSong, audioElement }) => {

  // audioElement.current.currentTime = 0;

  const clickRef = useRef();

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    
    const divprogress = offset / width * 100;
    audioElement.current.currentTime = divprogress / 100 * currentSong.length;
  }

  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);

  // useEffect(()=> {
  //   setSeconds()
  // },[])

  return (
    <div className='seeking-bar'>
              <div className='first-number'>{`${Math.floor(currentSong.ct/60)||"0"}:${Math.floor(currentSong.ct/10%60%6)||"0"}${Math.floor(currentSong.ct%60%10)||"0"}`}</div>
              <div className='seeking-bar-wrap'onClick={(e) => checkWidth(e)} ref={clickRef}>
                <div className='seeking-bar-inner'>
                  <div className='seeking-bar-inner-inner'>
                    <div className='progress-bar'>
                      <div className='progress-bar-inner'style={{width: `${currentSong.progress+"%"}`}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='second-number'>{`${Math.floor(currentSong.length / 60)||"0"}:${Math.floor(currentSong.length%60)||"00"}`}</div>
            </div>
  )
}

export default SeekBar;