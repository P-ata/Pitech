import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { getGreeting }  from './Utils/greetings';
import Counting from './Components/Counter';
import TabTitle from './Components/tabTitle';
import { ThemeProvider } from './Context/ThemeContext';
import ThemeToggle from './Components/ThemeToggle';

export default function App() {
  const saludo = getGreeting();
  return (
    <>
    <ThemeProvider>
      <Header
      title="Pitech Store"
      subtitle={`Todo el hardware que necesitas, ${saludo}`}
      />

      <ThemeToggle />
      <TabTitle />

      <Counting/>
    </ThemeProvider>
    </>
  );
}

