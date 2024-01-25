import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <Buttons />
          <div>
            <div className="p-3 border-b border-gray-500 text-lg py-6">
              Transaction History
            </div>
            <div className="p-3 border-b border-gray-500 text-lg py-6">
              Notification
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
