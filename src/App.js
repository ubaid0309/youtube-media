import { categories } from "./utils/constant";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
function App() {
  return (
    <div className="App h-screen w-screen bg-black font-roboto md:overflow-x-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed/>}></Route>
        <Route path="/video/:id" element={<VideoDetail/>}></Route>
        <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
