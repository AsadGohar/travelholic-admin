import axios from 'axios';
import React, { useEffect } from 'react';
import AdminPanel from "./components/admin-panel/AdminPanel";

axios.defaults.withCredentials = true;

const App = () => {

  return (
    <div>
      <AdminPanel />
    </div>
  );
}

export default App;
