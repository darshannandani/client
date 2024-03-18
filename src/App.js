import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "../src/components/Navbar.jsx";
import Dashboard from "../src/pages/Dashboard.jsx";
import Favorite from "../src/pages/Favourite.jsx";
import Search from "../src/pages/Search.jsx";
import Profile from "../src/pages/Profile.jsx"
import SideBar from "../src/components/SideBar.jsx";
// import DisplayPodcasts from "../src/pages/DisplayPodcasts.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import PodcastDetail from "./pages/PodcastDetail";
import DisplayPodcast from "./pages/DisplayPodcast";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const Podstream = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  //set the menuOpen state to false if the screen size is less than 768px
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 1110) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Podstream>
          {
            <SideBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/search" exact element={<Search />} />
              <Route path="/favorite" exact element={<Favorite />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/podcast/:id" exact element={<PodcastDetail />} />
              <Route
                path="/showpodcast/:type"
                exact
                element={<DisplayPodcast />}
              />
            </Routes>
          </Frame>
        </Podstream>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
