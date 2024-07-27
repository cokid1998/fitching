import { Routes, Route } from "react-router-dom";
import Index from "@/page/Index";
import Layout from "@/components/base/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Layout>
  );
}

export default App;
