// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';

const App = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  const labs = [
    { title: 'Лабораторная работа 1', description: 'Описание лабораторной работы 1' },
    { title: 'Лабораторная работа 2', description: 'Описание лабораторной работы 2' },
    // Добавьте остальные лабораторные работы по аналогии
  ];

  const selectLab = (lab) => {
    setSelectedLab(lab);
  };

  return (
    <div>
      <Header />
      <Menu labs={labs} onSelect={selectLab} />
      <Content selectedLab={selectedLab} />
      <Footer />
    </div>
  );
}

export default App;