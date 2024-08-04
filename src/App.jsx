import { Routes, Route } from "react-router-dom";
import Index from "@/page/Index";
import Layout from "@/components/base/Layout";
import NotFound from "@/NotFound";
import Video from "@/page/Video";
import VideoDetail from "@/page/VideoDetail";
import Login from "@/page/Login";
import Signup from "@/page/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/video/detail/:id" element={<VideoDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
