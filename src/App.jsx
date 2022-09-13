import * as React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';

export default function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}
