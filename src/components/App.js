import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthProvider";
import "../styles/App.css";
import MainLayout from "./MainLayout";
import ArtHistory from "./pages/ArtHistory";
import Artists from "./pages/Artists";
import Drawing from "./pages/Drawing";
import Home from "./pages/Home";
import Painting from "./pages/Painting";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DanteAndVirgil from "./sub-pages/home/DanteAndVirgil";
import IvanTheTerribleAndHisSonIvan from "./sub-pages/home/IvanTheTerribleAndHisSonIvan";
import GirlWithAPearlEarring from "./sub-pages/painting/GirlWithAPearlEarring";
import LaPrimavera from "./sub-pages/painting/LaPrimavera";
import SubPageOutlet from "./SubPageOutlet";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<SubPageOutlet />}>
                <Route path="danteandvirgil" element={<DanteAndVirgil />} />
                <Route
                  path="ivantheterribleandhissonivan"
                  element={<IvanTheTerribleAndHisSonIvan />}
                />
              </Route>

              <Route path="signin" element={<Signin />} />

              <Route path="signup" element={<Signup />} />

              <Route path="arthistory" element={<ArtHistory />} />

              <Route path="artists" element={<Artists />} />

              <Route path="painting" element={<Painting />} />
              <Route path="painting/*" element={<SubPageOutlet />}>
                <Route
                  path="girlwithApearlearring"
                  element={<GirlWithAPearlEarring />}
                />
                <Route path="laprimavera" element={<LaPrimavera />} />
              </Route>

              <Route path="drawing" element={<Drawing />} />
            </Routes>
          </MainLayout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
