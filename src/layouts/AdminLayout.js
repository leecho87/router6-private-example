import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import {ArrowDropDown,  ArrowDropUp} from '@mui/icons-material';
import Sidebar from './Sidebar'

const Wrapper = styled.section`
  position:relative;
  width:100vw;
  height:100vh;
  display:flex;
  #Container {
    flex: 1;
    display:flex;
    flex-direction:column;
  }
  .outlet {
    padding:10px;
    flex:1;
  }
`;

const Appbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px;
  .selectCC {
    position:relative;
  }
  .value {
    display:flex;
    align-items:center;
    padding:8px 20px;
    border:1px solid #ccc;
    font-size:14px;
    gap:20px;
    cursor:pointer;
  }
  .listBox {
    position:absolute;
    left:0;
    right:0;
    top:100%;
    margin-top:-1px;
    padding:8px;
    border:1px solid #ccc;
    background:#fff;
    ul {
      max-height:150px;
      overflow-x:hidden;
      overflow-y:auto;
    }
  }
`

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const {value} = event.target;
    setKeyword(value)
  }

  return (
    <Wrapper>
      <Sidebar />
      <div id="Container">
        <Appbar>
          <div className="selectCC">
            <div
              className="value"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>골프장 선택</span> 
              {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            </div>
            {isOpen && (
              <div className="listBox">
                <input
                  type="text"
                  placeholder="검색"
                  value={keyword}
                  onChange={handleChange}
                />
                <ul>
                  <li>가 골프장</li>
                  <li>나 골프장</li>
                  <li>다 골프장</li>
                  <li>라 골프장</li>
                  <li>마 골프장</li>
                  <li>바 골프장</li>
                  <li>사 골프장</li>
                </ul>
              </div>
            )}
          </div>
          <button onClick={() => {
            localStorage.removeItem("jwt")
            navigate("/login")
          }}>로그아웃</button>
        </Appbar>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}

export default AdminLayout