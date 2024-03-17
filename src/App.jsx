import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="card-container">
        <div className="img-container">
          <img src="/logo-productzilla.png" alt="logo-productzilla" />
        </div>
        <div className="title-container">
          <h1 className="title-text">Hai, Masuk Disini</h1>
          <img src="/hand-hai.png" alt="hand-hai" />
        </div>
        <div className="main-container">
          <p>Silahkan masuk menggunakan akun kamu ya</p>
          <div className="form-container">
            <div className="email-input-container">
              <label htmlFor="email">Email or Username</label>
              <input
                placeholder="Masukkan email kamu"
                className="text-input"
                type="text"
                id="email"
                name="email"
              />
            </div>
            <div className="password-input-container">
              <div className="password-label-wrapper">
                <label htmlFor="password">Password</label>
                <a className="forgot-password-text" href="/lupa-password">
                  Lupa Password?
                </a>
              </div>
              <input
                placeholder="Masukkan kata sandi kamu"
                className="text-input"
                type="text"
                id="password"
                name="password"
              />
            </div>
            <div className="remember-me-container">
              <label className="remember-me-label" htmlFor="remember-me">
                Ingat saya
                <input type="checkbox" id="remember-me" name="remember-me" />
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="btn-login">Masuk Sekarang</button>
            <div className="register-container">
              <p>Belum punya akun? &nbsp;</p>
              <a href="/register" className="register-text">
                Buat akun
              </a>
            </div>
            <div className="separator-container">
              <div className="hr-wrapper">
                <hr />
              </div>
              <p className="separator-text">atau</p>
              <div className="hr-wrapper">
                <hr />
              </div>
            </div>
            <div className="social-media-container">
              <img src="/facebook.png" alt="facebook-logo" />
              <img src="/twitter.png" alt="twitter-logo" />
              <img src="/google.png" alt="google-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
