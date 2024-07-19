import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home.jsx";
import { LoginPage } from "./pages/login.jsx";
import { RegisterPage } from "./pages/register.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import { CompanionsPage } from "./pages/companions.jsx";
import { ExplorePage } from "./pages/explore.jsx";
import { ValidateEmailPage } from "./pages/validate-email.jsx";
import { ToastContainer } from "react-toastify";
import { CreateTravelPage } from "./pages/create-travel.jsx";
import { AuthContextProvider } from "./contexts/auth/auth-provider.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./theme.css";
import { TravelDetailPage } from "./pages/travel-detail.jsx";
import { EditTravelPage } from "./pages/edit-travel.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companions" element={<CompanionsPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/validate-email" element={<ValidateEmailPage />} />
          <Route path="/travels/create" element={<CreateTravelPage />} />
          <Route path="/travels/:travelId/edit" element={<EditTravelPage />} />
          <Route path="/travels/:travelId" element={<TravelDetailPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
