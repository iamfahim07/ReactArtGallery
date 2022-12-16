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
import BlackDeathArt from "./sub-pages/artHistory/BlackDeathArt";
import FibonacciSequenceInArt from "./sub-pages/artHistory/FibonacciSequenceInArt";
import PaintingVsDrawing from "./sub-pages/artHistory/PaintingVsDrawing";
import RepetitionInArt from "./sub-pages/artHistory/RepetitionInArt";
import WhatIs2DArt from "./sub-pages/artHistory/WhatIs2DArt";
import WhatIs3DArt from "./sub-pages/artHistory/WhatIs3DArt";
import GustaveDore from "./sub-pages/artists/GustaveDore";
import JohannesVermeer from "./sub-pages/artists/JohannesVermeer";
import LeonardoDaVinci from "./sub-pages/artists/LeonardoDaVinci";
import PabloPicasso from "./sub-pages/artists/PabloPicasso";
import Raphael from "./sub-pages/artists/Raphael";
import VincentVanGogh from "./sub-pages/artists/VincentVanGogh";
import DoraMaarWithCat from "./sub-pages/drawing/DoraMaarWithCat";
import NurseryOnSchenkweg from "./sub-pages/drawing/NurseryOnSchenkweg";
import SamsonSlayingALion from "./sub-pages/drawing/SamsonSlayingALion";
import TheArcherAndTheMilkmaid from "./sub-pages/drawing/TheArcherAndTheMilkmaid";
import VitruvianMan from "./sub-pages/drawing/VitruvianMan";
import WomanFromTheVillaPamphili from "./sub-pages/drawing/WomanFromTheVillaPamphili";
import DanteAndVirgil from "./sub-pages/home/DanteAndVirgil";
import IvanTheTerribleAndHisSonIvan from "./sub-pages/home/IvanTheTerribleAndHisSonIvan";
import MonaLisa from "./sub-pages/home/MonaLisa";
import TheSchoolOfAthens from "./sub-pages/home/TheSchoolOfAthens";
import TheStarryNight from "./sub-pages/home/TheStarryNight";
import TheWeddingAtCana from "./sub-pages/home/TheWeddingAtCana";
import GirlWithAPearlEarring from "./sub-pages/painting/GirlWithAPearlEarring";
import LaPrimavera from "./sub-pages/painting/LaPrimavera";
import SaturnDevouringOneOfHisSons from "./sub-pages/painting/SaturnDevouringOneOfHisSons";
import StarryNightOverTheRhoone from "./sub-pages/painting/StarryNightOverTheRhoone";
import TheCreationOfAdam from "./sub-pages/painting/TheCreationOfAdam";
import TheDeathOfSocrates from "./sub-pages/painting/TheDeathOfSocrates";
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
                <Route path="monalisa" element={<MonaLisa />} />
                <Route
                  path="theschoolofathens"
                  element={<TheSchoolOfAthens />}
                />
                <Route path="thestarrynight" element={<TheStarryNight />} />
                <Route path="theweddingatcana" element={<TheWeddingAtCana />} />
              </Route>

              <Route path="signin" element={<Signin />} />

              <Route path="signup" element={<Signup />} />

              <Route path="arthistory" element={<ArtHistory />} />
              <Route path="arthistory/*" element={<SubPageOutlet />}>
                <Route path="blackdeathart" element={<BlackDeathArt />} />
                <Route
                  path="fibonaccisequenceinart"
                  element={<FibonacciSequenceInArt />}
                />
                <Route
                  path="paintingvsdrawing"
                  element={<PaintingVsDrawing />}
                />
                <Route path="repetitioninart" element={<RepetitionInArt />} />
                <Route path="whatis2dart" element={<WhatIs2DArt />} />
                <Route path="whatis3dart" element={<WhatIs3DArt />} />
              </Route>

              <Route path="artists" element={<Artists />} />
              <Route path="artists/*" element={<SubPageOutlet />}>
                <Route path="gustavedore" element={<GustaveDore />} />
                <Route path="johannesvermeer" element={<JohannesVermeer />} />
                <Route path="leonardodavinci" element={<LeonardoDaVinci />} />
                <Route path="pablopicasso" element={<PabloPicasso />} />
                <Route path="raphael" element={<Raphael />} />
                <Route path="vincentvangogh" element={<VincentVanGogh />} />
              </Route>

              <Route path="painting" element={<Painting />} />
              <Route path="painting/*" element={<SubPageOutlet />}>
                <Route
                  path="girlwithApearlearring"
                  element={<GirlWithAPearlEarring />}
                />
                <Route path="laprimavera" element={<LaPrimavera />} />
                <Route
                  path="saturndevouringoneofhissons"
                  element={<SaturnDevouringOneOfHisSons />}
                />
                <Route
                  path="starrynightovertherhoone"
                  element={<StarryNightOverTheRhoone />}
                />
                <Route
                  path="thecreationofadam"
                  element={<TheCreationOfAdam />}
                />
                <Route
                  path="thedeathofsocrates"
                  element={<TheDeathOfSocrates />}
                />
              </Route>

              <Route path="drawing" element={<Drawing />} />
              <Route path="drawing/*" element={<SubPageOutlet />}>
                <Route path="doramaarwithcat" element={<DoraMaarWithCat />} />
                <Route
                  path="nurseryonschenkweg"
                  element={<NurseryOnSchenkweg />}
                />
                <Route
                  path="samsonslayingalion"
                  element={<SamsonSlayingALion />}
                />
                <Route
                  path="thearcherandthemilkmaid"
                  element={<TheArcherAndTheMilkmaid />}
                />
                <Route path="vitruvianman" element={<VitruvianMan />} />
                <Route
                  path="womanfromthevillapamphili"
                  element={<WomanFromTheVillaPamphili />}
                />
              </Route>
            </Routes>
          </MainLayout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
