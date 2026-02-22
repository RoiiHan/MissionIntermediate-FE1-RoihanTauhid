import React from 'react'
import "../styling/register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
      <section className="register-section">
        <div className="register-box">
            <div className="register-box-desc">
            <p className="judul"> <img  className="logo-register" src="/public/movie-open.png" alt=""/> CHILL</p>
            <h3>Daftar</h3>
            <p>Selamat Datang!</p>
            <form action="">
                <label className="username" htmlFor="username">Username</label>
                <input type="text" placeholder="Masukkan Username"/>
                <br/>
                <label className="password" htmlFor="password">Kata Sandi</label>
                <div className="password-wrapper">
                    <input type="password" id="password" placeholder="Masukkan Kata Sandi"/>
                    <i className="fa-solid fa-eye"></i>
                </div>
                <br/>
                <label className="password" htmlFor="password">Konfirmasi Kata Sandi</label>
                <div className="password-wrapper">
                    <input type="password" id="password" placeholder="Masukkan Kata Sandi"/>
                    <i className="fa-solid fa-eye"></i>
                </div>
            </form>
            <div className="punya">
                <div className="punya1"><p>Sudah Punya Akun? <Link className="punya-link" to="/" > Masuk</Link>
                </p></div>
            </div>
            <div className="daftar-btn">
                <button className="btn-daftar-1">Daftar</button>
                <p>Atau</p>
                <button className="btn-daftar-google">
                    <div><img className="img-btn-google" src="../asset/google-img.png" alt=""/></div> 
                    <p> Daftar Dengan Google</p> </button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Register