import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import  getGreeting  from './Utils/greetings';

export default function App() {
  const saludo = getGreeting();
  return (
    <>

    <Header
    title="Pitech Store"
    subtitle={`Todo el hardware que necesitas, ${saludo}`}
    />
    
    </>
  );
}
