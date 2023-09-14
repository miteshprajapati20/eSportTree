import Card from "./components/Card";


function App() {

  return (
    <div className=" bg-black w-full">
      <div className="w-full mx-auto min-h-[100vh] flex items-center justify-center text-white">
        <div className="card overflow-hidden">
          <Card/>
        </div>
      </div>
    </div>
  );
}
export default App;
