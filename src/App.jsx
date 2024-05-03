import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './component/MainPage';
import Popular from './component/PopularPage';
import NowPlaying from './component/NowPlayingPage';
import TopRated from './component/TopRatedPage';
import UpComing from './component/UpComingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="Navbar">
          <div className="UMC">
            <Link to="/"><p>UMC Movie</p></Link>
          </div>
          <p>회원가입</p>
          <Link to="/popular"><p>Popular</p></Link>
          <Link to="/NowPlaying"><p>Now Playing</p></Link>
          <Link to="/TopRated"><p>Top Rated</p></Link>
          <Link to="/UpComing"><p>Upcoming</p></Link>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/UpComing" element={<UpComing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
