import { useEffect } from "react";

const PlayPauseButton = ({ audioElement, isPlaying, setIsPlaying }) => {
  //if paused:
  const buttonStatusPaused =
    "M 3 1.713 a 0.7 0.7 0 0 1 1.05 -0.607 l 10.89 6.288 a 0.7 0.7 0 0 1 0 1.212 L 4.05 14.894 A 0.7 0.7 0 0 1 3 14.288 V 1.713 Z";

  const buttonStatusPlaying =
    "M 2.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 H 2.7 Z m 8 0 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -2.6 Z";

  const playPause = () => {
    const path = document.getElementById("pathPlay");
    if (!isPlaying) {
      path.setAttribute("d", buttonStatusPlaying);
      audioElement.current.play();
      setIsPlaying(true);
    } else {
      path.setAttribute("d", buttonStatusPaused);
      audioElement.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="play-pause-container" onClick={playPause}>
        <button className="play-pause-playbar">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path id="pathPlay" d={buttonStatusPaused} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default PlayPauseButton;
