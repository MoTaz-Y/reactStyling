import { Route, Router, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> Movie Page</>} />
        <Route path="/actors" element={<> Actors Page</>} />
        <Route path="/tv" element={<>TVshows Page</>} />
        <Route path="/series" element={<> Series Page</>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
