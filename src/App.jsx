import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './component/MainPage';
import Popular from './component/PopularPage';
import NowPlaying from './component/NowPlayingPage';
import TopRated from './component/TopRatedPage';
import UpComing from './component/UpComingPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginButtonClick = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    const loginButtonClass = isLoggedIn ? 'logout-button' : 'login-button';

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="Navbar">
          <div className="UMC">
            <Link to="/"><p>UMC Movie</p></Link>
          </div>
          <p className={loginButtonClass} onClick={handleLoginButtonClick}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </p>
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
        
        <footer>
          UMC_3WEEK_PORJECT_PARK SAM RYEONG
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
