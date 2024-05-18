import logo from './logo.svg';
import './App.css';
import Resumetemplate from './Templates/ResumeTemplate1/Resumetemplate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResume from './UserInfo/Create/CreateResume';
import ViewResume from './UserInfo/View/ViewResume';

function App() {
return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<h1>this is working</h1>}>
  </Route>
  <Route path="template" element={<Resumetemplate />} />
  <Route path="createform" element={<CreateResume />} />
  <Route path="editform" element={<Resumetemplate />} />
  <Route path="Viewform" element={<ViewResume />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
