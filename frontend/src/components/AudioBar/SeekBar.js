const SeekBar = ({ currentSong }) => {

  return (
    <div className='seeking-bar'>
              <div className='first-number'>0:00</div>
              <div className='seeking-bar-wrap'>
                <div className='seeking-bar-inner'>
                  <div className='seeking-bar-inner-inner'>
                    <div className='progress-bar'>
                      <div className='progress-bar-inner'style={{width: `${currentSong.progress+"%"}`}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='second-number'>2:07</div>
            </div>
  )
}

export default SeekBar;