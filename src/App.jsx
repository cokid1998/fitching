import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/page/Index";

function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
