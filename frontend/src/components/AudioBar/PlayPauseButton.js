const PlayPauseButton = () => {
  let buttonStatus;

  //if paused:
  const buttonStatusPaused = (
    <>
    <path d="M 3 1.713 a 0.7 0.7 0 0 1 1.05 -0.607 l 10.89 6.288 a 0.7 0.7 0 0 1 0 1.212 L 4.05 14.894 A 0.7 0.7 0 0 1 3 14.288 V 1.713 Z"></path>
    </>
  );

  const buttonStatusPlaying = (
    <>
    <path d="M 2.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 H 2.7 Z m 8 0 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -2.6 Z"></path>
    </>
  );

  buttonStatus = buttonStatusPaused;

  const changeButton = () => {
    buttonStatus === buttonStatusPaused
      ? (buttonStatus = buttonStatusPlaying)
      : (buttonStatus = buttonStatusPaused);
      console.log(buttonStatus === buttonStatusPlaying);
  };

  return (
    <>
      <div className="play-pause-container"onClick={changeButton}>
        <button className="play-pause-playbar">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            {buttonStatus}
          </svg>
        </button>
      </div>
    </>
  );
};

export default PlayPauseButton;
