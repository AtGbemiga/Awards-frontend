import "./App.css";
// import react router dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import OurPartnersPage from "./pages/OurPartners";
import NominatePage from "./pages/Nominate";
import WinnerPage from "./pages/Winner";
import PrideOfNigeriaFundPage from "./pages/PrideOfNigeriaFund";
import AwardTypesPage from "./pages/AwardTypes";
import GallaryPage from "./pages/Gallary";
import RegionalAwardsPage from "./pages/RegionalAwards";
import PastHerosPage from "./pages/PastHeros";
import Header from "./components/app/App";
import Footer from "./components/footer/Footer";
import NominateFormPage from "./pages/NominateForm";
import FormSubmissionMsg from "./pages/FormSubmissionMsg";
import { useLocation } from "react-router-dom";
import DynamicPostPage from "./pages/DynamicPostPage";
import { useState } from "react";
import ShortVideos from "./pages/ShortVideos";
import DynamicShortVideoPage from "./pages/DynamicShortVideoPage";

function App(): JSX.Element {
  // create routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="our-partners" element={<OurPartnersPage />} />
        <Route path="nominate" element={<NominatePage />} />
        <Route path="winner" element={<WinnerPage />} />
        <Route
          path="pride-of-nigeria-fund"
          element={<PrideOfNigeriaFundPage />}
        />
        <Route path="award-types" element={<AwardTypesPage />} />
        <Route path="gallary" element={<GallaryPage />} />
        <Route path="regional-awards" element={<RegionalAwardsPage />} />
        <Route path="past-heros" element={<PastHerosPage />} />
        <Route path="short-videos" element={<ShortVideos />} />

        {/*  */}
        <Route path="nominate-form" element={<NominateFormPage />} />
        <Route path="form-submitted" element={<FormSubmissionMsg />} />
        <Route path="post/:post_id" element={<DynamicPostPage />} />
        <Route
          path="short-videos/:video_id"
          element={<DynamicShortVideoPage />}
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = (): JSX.Element => {
  const location = useLocation();
  const [showDropDown, setShowDropDown] = useState(true);

  const handleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  return (
    <>
      <nav className="nav">
        <div className="logoContainer">
          <Link to="/">
            <img
              src="/awardHeaderLogo.jpeg"
              alt="essential logo"
              className="logo"
            />
          </Link>
        </div>

        <section>
          <Link
            to="/"
            className={location.pathname === "/" ? "current" : "nonActive"}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={
              location.pathname === "/about-us" ? "current" : "nonActive"
            }
          >
            About us
          </Link>
          <Link
            to="#ourPartners"
            className={
              location.pathname === "/ourPartners" ? "current" : "nonActive"
            }
          >
            Our partners
          </Link>
          <Link
            to="/nominate"
            className={
              location.pathname === "/nominate" ? "current" : "nonActive"
            }
          >
            Nominate
          </Link>
          <Link
            to="/winner"
            className={
              location.pathname === "/winner" ? "current" : "nonActive"
            }
          >
            Winner
          </Link>
          <Link
            to="/pride-of-nigeria-fund"
            className={
              location.pathname === "/pride-of-nigeria-fund"
                ? "current"
                : "nonActive"
            }
          >
            Pride of Nigeria Fund
          </Link>
          <Link
            to="/award-types"
            className={
              location.pathname === "/award-types" ? "current" : "nonActive"
            }
          >
            Award Types
          </Link>
          <Link
            to="/gallary"
            className={
              location.pathname === "/gallary" ? "current" : "nonActive"
            }
          >
            Gallary
          </Link>
          <Link
            to="/regional-awards"
            className={
              location.pathname === "/regional-awards" ? "current" : "nonActive"
            }
          >
            Regional Awards
          </Link>
          <Link
            to="/past-heros"
            className={
              location.pathname === "/past-heros" ? "current" : "nonActive"
            }
          >
            Past Heros
          </Link>
          <button className="dropdown" onClick={handleDropDown}>
            More <img src="/Vector 39.svg" alt="drop down arrow" />
          </button>
          {showDropDown && (
            <div className="dropdownContentDiv">
              <Link to="" className="dropdownContent">
                Group
              </Link>
              <Link
                to="short-videos"
                className="dropdownContent dropdownContentSecondLink"
              >
                Reels
              </Link>
            </div>
          )}
        </section>
      </nav>
      {/* research the appoprate tag that replaces header */}
      <header className="header">
        <Header />
      </header>
      <main>
        {" "}
        {/* displays current page */}
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
