import React from 'react';
import PlayPauseButton from './PlayPauseButton';

const Player = ({ audioElement }) => (
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
                <span className='title-name-span'>Cut My Hair</span>
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
              <PlayPauseButton audioElement={audioElement}/>
            <button className='back-song'>
                <svg role="img"height="16"width="16"viewBox="0 0 16 16">
                  <path d="M 12.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 5.15 L 2.05 1.107 A 0.7 0.7 0 0 0 1 1.712 v 12.575 a 0.7 0.7 0 0 0 1.05 0.607 L 12 9.149 V 14.3 a 0.7 0.7 0 0 0 0.7 0.7 h 1.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -1.6 Z"></path>
                </svg>
              </button>
            </div>
          </div>
            <div className='seeking-bar'>
              <div className='first-number'>0:00</div>
              <div className='seeking-bar-wrap'>
                <div className='seeking-bar-inner'>
                  <div className='seeking-bar-inner-inner'>
                    <div className='progress-bar'>
                      <div className='progress-bar-inner'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='second-number'>2:07</div>
            </div>
        </div>
      </div>

      {/* 3/3 mute/volume */}
      <div className='volume-mute-third'>
        <div className='volume-mute-container'>
          <div className='volume-bar'>
            <button className='mute-button'>
              <svg role="presentation"height="16"width="16"viewBox='0 0 16 16'className='svg-mute'>
                <path d="M 9.741 0.85 a 0.75 0.75 0 0 1 0.375 0.65 v 13 a 0.75 0.75 0 0 1 -1.125 0.65 l -6.925 -4 a 3.642 3.642 0 0 1 -1.33 -4.967 a 3.639 3.639 0 0 1 1.33 -1.332 l 6.925 -4 a 0.75 0.75 0 0 1 0.75 0 Z m -6.924 5.3 a 2.139 2.139 0 0 0 0 3.7 l 5.8 3.35 V 2.8 l -5.8 3.35 Z m 8.683 4.29 V 5.56 a 2.75 2.75 0 0 1 0 4.88 Z"></path>
                <path d="M 11.5 13.614 a 5.752 5.752 0 0 0 0 -11.228 v 1.55 a 4.252 4.252 0 0 1 0 8.127 v 1.55 Z"></path>  
              </svg>
            </button>
            <div className='volume-bar-slider-container'>
              <div className='volume-bar-slider'>
                <div className='progress-bar'>
                  <div className='progress-bar-back'>
                    <div className='progress-bar-background'>
                      <div className='progress-bar-background-inner'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
);

export default Player;