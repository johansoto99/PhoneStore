import './App.css';
import { Header } from './pages/components/header';
import { Footer } from './pages/components/footer';
import { PhoneStore } from './pages/PhoneStore'
function App() {
  return (
    <div>
      <Header />
      <PhoneStore/>
      <Footer />
    </div>
  );
}

export default App;
