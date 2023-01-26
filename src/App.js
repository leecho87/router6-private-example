import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import RenderRoutes from 'routes/Routes';
import { AuthContext } from 'components/common/Auth';

function App() {
  const {auth, setAuth} = useContext(AuthContext);

  return (
    <>
      <div style={{ display:'flex', gap: '10px' }}>
        <button onClick={() => setAuth(!auth)}>로그인</button>
        <span>로그인여부: (상태: {auth ? "로그인" : "로그아웃"})</span>
        <Link to="/">홈으로</Link>
      </div>
      <hr />
      <RenderRoutes />
    </>
  )
}

export default App