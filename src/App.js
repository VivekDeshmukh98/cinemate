import { AllRoutes } from "./routes/AllRoutes";
import './App.css';
import { Header } from "./components/Header";
import { Footer} from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-800">
      <Header />
      <main className="flex-grow">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
