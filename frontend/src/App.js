import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboute from "./components/About/Aboute";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Project from "./components/Admin/Project";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home timelines={user.timeline} skills={user.skills} />}
            />
            <Route path="/about" element={<Aboute about={user.about} />} />
            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
