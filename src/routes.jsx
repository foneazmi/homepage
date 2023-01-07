import { DashboardScreen } from "./ui/screens";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
    </Routes>
  );
};

export const RouteApp = () => {
  return (
    <div data-theme="halloween">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};
