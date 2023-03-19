import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled'

const LoginBox = styled.div`
  position:relative;
  h1 {
    font-size:22px;
    text-align:center;
    span {
      font-size:16px;
      font-weight:100;
      display:block;
    }
  }
`

const LoginPage = () => {
  const [login, setLogin] = useState({
    name: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("jwt", JSON.stringify(login));
    navigate("/")
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value
    });
  }

  return (
    <LoginBox>
      <h1>본사 관리자
        <span>(G-Field / 경기관제 / 연단체 운영)</span>
        <div className="inputRow">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />
            <input type="password" name="password" onChange={handleChange} />
            <button type="submit" disabled={!login.name.length && !login.password.length}>로그인</button>
          </form>
        </div>
      </h1>
    </LoginBox>
  )
}

export default LoginPage;