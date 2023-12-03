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
// import YourGroupPage from "./pages/YourGroupsPage";
import YourGroupPage from "./pages/YourGroupPage";
import CreateGroup from "./pages/CreateGroup";
import DynamicGroupPage from "./pages/DynamicGroupPage";

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
        <Route path="your-groups" element={<YourGroupPage />} />
        <Route path="create-group" element={<CreateGroup />} />
        <Route path="group/:club_id" element={<DynamicGroupPage />} />
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
  const [showDropDown, setShowDropDown] = useState(false);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const handleHideOnMobile = () => {
    setHideOnMobile((prevState) => !prevState);
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

        <div className={hideOnMobile ? "timeToDisplay" : "hideOnMobile"}>
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
                location.pathname === "/regional-awards"
                  ? "current"
                  : "nonActive"
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
                <Link to="your-groups" className="dropdownContent">
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
        </div>

        <button className="showOnMobileBtn" onClick={handleHideOnMobile}>
          {hideOnMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </button>
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
