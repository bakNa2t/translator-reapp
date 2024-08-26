import AppStartpage from "./components/AppStartpage";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#7dd3fc] to-[#065f46] flex justify-center items-center">
      <div className="w-[90%] max-w-lg h-[70vh] bg-[#57534e] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        <AppStartpage />
      </div>
    </div>
  );
}

export default App;
