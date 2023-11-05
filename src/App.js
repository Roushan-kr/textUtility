import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#e66465');

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1200);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode enabled', 'success');
      document.title = "textUtils - dark home"
    } else {
      setmode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert('Light mode enabled', 'success');
      document.title = "textUtils - light home"
    }
    // setInterval(() => {
    //   document.title ="bckc after 1.5 sec"

    // }, 1500);
    // setInterval(() => {
    //   document.title ="bckc after 2 sec"

    // }, 2000);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  // Define an inline style object for the text color
  const textColorStyle = {
    color: selectedColor,

  };

  return (
    <Router>
      <div style={textColorStyle}>
        <Navbar
          text="Reports"
          title="TextUtils"
          mode={mode}
          toggleMode={togglemode}
          userColor={handleColorChange}
          usedColor={selectedColor}
        />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
           <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
           <Route exact path="about" element={<About mode={mode} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;