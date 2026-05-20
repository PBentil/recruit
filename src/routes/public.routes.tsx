import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/landing.tsx";


const PublicRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
  )
}

export default PublicRoutes;