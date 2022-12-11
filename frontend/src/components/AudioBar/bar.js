import React from 'react';

const Player = () => (
  <div className='root-audio-bar'>
  <footer className='audio-footer'>
    <div className='audio-bar-grid'>

    {/* album and title third */}
      <div className='now-playing'>
        <div className='now-playing-widget'>
          <div className='album-cover'>
            <img src="quadrophenia.jpg"alt="Quadrophenia"className='quadrophenia' />
          </div>
          <div className='song-info-playbar'>
            <div className='title-div-playbar'>
              <div className='title-div-playbar-pad'>
                <div className='title-padding-stuff'>
                <span className='title-name-span'>Title Name</span>
                </div>
              </div>
            </div>
          <div className='artist-name-root-div'>
            <div className='artist-name-container-div'>
              <div className='artist-name-padding'>
                <div className='artist-name-wrapper'>
                  <span className='artist-name'>The Who</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* playbar funcitonality, 2/3 */}
      <div className='playbar-functionality-root'>
        <div className='playbar-controls'>
          <div className='playbar-controls-buttons'>
            <div className='playbar-controls-buttons-left'>
              <button className='back-song'>
                <svg role="img"height="16"width="16"viewBox="0 0 16 16">
                  <path d="M 3.3 1 a 0.7 0.7 0 0 1 0.7 0.7 v 5.15 l 9.95 -5.744 a 0.7 0.7 0 0 1 1.05 0.606 v 12.575 a 0.7 0.7 0 0 1 -1.05 0.607 L 4 9.149 V 14.3 a 0.7 0.7 0 0 1 -0.7 0.7 H 1.7 a 0.7 0.7 0 0 1 -0.7 -0.7 V 1.7 a 0.7 0.7 0 0 1 0.7 -0.7 h 1.6 Z"></path>
                </svg>
              </button>
              <div className='play-paude-container'>
            <button className='play-pause-playbar'>
            <svg role="img"height="16"width="16"viewBox="0 0 16 16">
              <path d="M 3 1.713 a 0.7 0.7 0 0 1 1.05 -0.607 l 10.89 6.288 a 0.7 0.7 0 0 1 0 1.212 L 4.05 14.894 A 0.7 0.7 0 0 1 3 14.288 V 1.713 Z"></path>
            </svg>
            </button>
            </div>
            <button className='back-song'>
                <svg role="img"height="16"width="16"viewBox="0 0 16 16">
                  <path d="M 12.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 5.15 L 2.05 1.107 A 0.7 0.7 0 0 0 1 1.712 v 12.575 a 0.7 0.7 0 0 0 1.05 0.607 L 12 9.149 V 14.3 a 0.7 0.7 0 0 0 0.7 0.7 h 1.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -1.6 Z"></path>
                </svg>
              </button>
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>


      <div></div>
    </div>
  </footer>
</div>
);

export default Player;