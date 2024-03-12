import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

const phrases: string[] = [
  "no",
  "are you sure?",
  "really sure?",
  "pookie please",
  "just think about it",
  "i'll cry",
  "i'll be sad",
  "i'll be very sad",
  "i'll be very very sad",
  "i'll be very very very sad",
  "hey siri, play marvin's room",
];

function App() {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const yesButtonSize: number = noCount * 30 + 16;

  useEffect(() => {
    document.body.classList.add("bg-color");
    document.body.classList.add("fonts");
    return () => {
      document.body.classList.remove("bg-color");
      document.body.classList.remove("fonts");
    };
  }, []);

  const handleNoClick = (): void => {
    console.log("before", noCount);
    setNoCount(noCount + 1);
    console.log("after", noCount);
  };

  const getNoText = (): string => {
    return phrases[noCount % phrases.length];
  };

  return (
    <div className="h-screen flex">
      <div className="flex flex-col items-center content-center m-auto">
        {yesPressed ? (
          <>
            <img
              className="gif"
              alt="bears kissing"
              src="https://media1.tenor.com/m/JHUJYSfYcSsAAAAC/love-mochi.gif"
            />
            <h1 className="text-4xl my-4">ok yay!</h1>
          </>
        ) : (
          <>
            <img
              className="gif"
              alt="bear with hearts"
              src="https://media1.tenor.com/m/YUF4morhOVcAAAAC/peach-cat-boba-tea.gif"
            />
            <h1 className="text-4xl font-medium my-4 text-center">
              will you be my valentine?
            </h1>
            <div className="flex flex-wrap flex-col md:flex-row gap-3 items-center content-center mb-2">
              <button
                className="font-extrabold px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                yes
              </button>
              <button
                className="no-button font-extrabold px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                onClick={handleNoClick}
              >
                {getNoText()}
              </button>
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
