import { useHistory } from "react-router-dom";

function PlayerTwo(){

  const history = useHistory();

  const routeChange = () =>{
    history.replace("/signup")
  }

  return (
    <>
    <div className="player-two-div">
      <div className="player-two-container">
        <div className="player-two-text">
          <p className="preview">Preview of Spotify</p>
          <p className="preview-2">Signup to get (un)limited songs with no ads. No credit card needed.</p>
        </div>
      </div>
      <button className="login-button"id="login-preview"onClick={routeChange}>
        <span className='inner-login-button'>Sign up Free</span>
      </button>
    </div>
    </>
  )

}

export default PlayerTwo;