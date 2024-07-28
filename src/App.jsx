import { Routes, Route } from "react-router-dom";
import Index from "@/page/Index";
import Layout from "@/components/base/Layout";
import NotFound from "@/NotFound";
import Video from "@/page/Video";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/video" element={<Video />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
