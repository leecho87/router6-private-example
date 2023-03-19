import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

const AuthWrapper = styled.section`
  position:relative;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  )
}

export default AuthLayout