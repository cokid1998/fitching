import { Routes, Route } from "react-router-dom";
import Index from "@/page/Index";
import Layout from "@/components/base/Layout";
import NotFound from "@/NotFound";
import Video from "@/page/Video";
import VideoDetail from "@/page/VideoDetail";
import { AuthContext } from "@/context/AuthContext";
import { useState } from "react";
import Login from "@/page/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/video/detail/:id" element={<VideoDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
