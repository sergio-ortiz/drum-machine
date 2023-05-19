import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drumPadSelect } from "./features/display/displaySlice";

function App() {
  const display = useSelector(state => state.display.value);
  const dispatch = useDispatch();

  const clickHandler = event => {
    document.getElementById(event.target.textContent).play();
    dispatch(drumPadSelect(event.target.id));
  }

  const handleKeyPress = event => {
    const drumPads = Array.from(document.querySelectorAll(".drum-pad"));
    drumPads.forEach(pad => event.key.toUpperCase() === pad.textContent && pad.click())
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)
  })

  return (
    <div className="container-fluid bg-secondary vh-100 text-center">
      <div className="row h-100 align-items-center justify-content-center">
        <div id="drum-machine" className="col-3 bg-black h-50 border border-5 border-dark rounded-2">
          <div id="display"  className="bg-light w-75 m-auto mt-3 fs-1 border border-danger border-5 rounded-1">{display}</div>
          <button 
            id="heater-1" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler} 
          >
            Q
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
          </button>
          <button 
            id="heater-2" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad" 
            onClick={clickHandler}
          >
            W
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
          </button>
          <button 
            id="heater-3" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            E
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
          </button>
          <button 
            id="heater-4" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            A
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
          </button>
          <button 
            id="clap" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            S
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
          </button>
          <button 
            id="open-hh" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            D
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
          </button>
          <button 
            id="kick-n-hat" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            Z
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
          </button>
          <button 
            id="kick" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            X
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
          </button>
          <button 
            id="closed-hh" 
            className="btn btn-dark btn-lg mx-4 my-4 fs-1 px-4 border border-5 border-primary drum-pad"
            onClick={clickHandler}
          >
            C
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
