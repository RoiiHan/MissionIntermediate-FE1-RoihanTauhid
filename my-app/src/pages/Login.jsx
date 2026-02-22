import React from 'react'
import "../styling/login.css"
import logo from "/public/movie-open.png"
import { Link } from 'react-router-dom'

function Login() {
  return (
  <section>
    <div className="login-box">
        <div className="login-box-desc">
          <p className="judul"> <img  className="logo-login" src={logo} alt="" /> CHILL</p>
          <h3>Masuk</h3>
          <h6>Selamat Datang Kembali</h6>
          <form action="">
              <label className="username" htmlFor="username">Username</label>
              <input type="text" placeholder="Masukkan Username"/>
              <br/>
              <label className="password" htmlFor="password">Kata Sandi</label>
              <div className="password-wrapper">
                  <input type="password" id="password" placeholder="Masukkan Kata Sandi" />
                  <i className="fa-solid fa-eye"></i>
              </div>   
          </form>
          <div className="daftar">
              <div className="daftar1"><p>Belum Punya Akun? <Link to="/register" className="daftar-link" >   Daftar </Link> </p></div>
              <div className="daftar2"><a href="#" className="lupa-sandi">Lupa Kata Sandi?</a></div>
          </div>
          <div className="masuk-btn">
              <button className="btn-masuk-1"><a href="./beranda.html">Masuk</a> </button>
              <p>Atau</p>
              <button className="btn-masuk-google">
                  <div><img className="img-btn-google" src="../asset/google-img.png" alt="" /></div> 
                  <p> Masuk Dengan Google</p> </button>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Login