function App() {
  return (
    <div className="container-fluid bg-secondary vh-100 text-center">
      <div className="row h-100 align-items-center justify-content-center">
        <div id="drum-machine" className="col-3 bg-black h-50 border border-5 border-dark rounded-2">
          <div id="display"  className="bg-light w-75 m-auto mt-3 fs-1 border border-danger border-5 rounded-1">Drum Machine</div>
          <button id="heater-1" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">Q</button>
          <button id="heater-2" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">W</button>
          <button id="heater-3" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">E</button>
          <button id="heater-4" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">A</button>
          <button id="clap" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">S</button>
          <button id="open-hh" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">D</button>
          <button id="kick-n-hat" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">Z</button>
          <button id="kick" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">X</button>
          <button id="closed-hh" className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad">C</button>
        </div>
      </div>
    </div>
  )
}

export default App
