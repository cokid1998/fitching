import { Routes, Route } from "react-router-dom";
import Index from "@/page/Index";
import Layout from "@/components/base/Layout";
import NotFound from "@/NotFound";
import Video from "@/page/Video";
import VideoDetail from "@/page/VideoDetail";
import Login from "@/page/Login";
import Signup from "@/page/Signup";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <Layout>
      <Helmet>
        <title>Fitching</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video/detail/:id" element={<VideoDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
