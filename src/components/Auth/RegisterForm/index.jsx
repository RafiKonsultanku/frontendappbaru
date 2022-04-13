import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import InputMask from "react-input-mask";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      npwp: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let npwp = target.npwp;

    this.setState({
      [npwp]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="Forms">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/login"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Login
            </NavLink>
            <NavLink
              exact
              to="/register"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Buat Akun
            </NavLink>
          </div>

          <div className="formTitle">
            <h1>Buat Akun</h1>{" "}
          </div>
          <div className="formCenter">
            <form onSubmit={this.handleSubmit} className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="npwp">
                  NPWP
                </label>
                <InputMask
                  mask="99.999.999.9-999.999"
                  type="text"
                  id="npwp"
                  className="formFieldInput"
                  Placeholder="_ _._ _ _._ _ _._-._ _ _._ _ _"
                  autoComplete="off"
                  //   alwaysShowMask
                  name="npwp"
                  maskChar=""
                  noSpaceBetweenChars={true}
                  //   value={this.state.npwp}
                  onChange={this.handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Nomor Telfon
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="formFieldInput"
                  placeholder="Masukkan Nomor Telfon Anda"
                  name="no_telp"
                  autoComplete="off"
                  //   value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Masukkan Email Anda"
                  name="email"
                  autoComplete="off"
                  //   value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Minimal 8 karakter, campuran huruf dan angka"
                  name="password"
                  //   value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={this.state.hasAgreed}
                    onChange={this.handleChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="formField">
                <button className="formFieldButton">DAFTAR</button>{" "}
                {/* <Link to="/sign-in" className="formFieldLink">
                  I'm already member
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpForm;
