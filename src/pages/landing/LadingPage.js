import { Navigate } from "react-router-dom"; 

const LandingPage = ({isLogin}) => {
    if (isLogin) {
        return <Navigate to="/main" replace />
    }

    return <Navigate to="/login" replace />
}

export default LandingPage;