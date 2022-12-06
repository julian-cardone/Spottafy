import React, { useState } from 'react';
import { LoginModal } from '../SessionForm';

function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="login-button">
        <span className='inner-login-button'>Log in</span>
      </button>
      {showModal && <LoginModal onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default LoginButton;