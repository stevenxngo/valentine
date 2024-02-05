import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

const phrases = [
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
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 30 + 18;

  useEffect(() => {
    document.body.classList.add("bg-color");
    document.body.classList.add("fonts");
    return () => {
      document.body.classList.remove("bg-color");
      document.body.classList.remove("fonts");
    };
  }, []);

  const handleNoClick = () => {
    console.log("before", noCount);
    setNoCount(noCount + 1);
    console.log("after", noCount);
  };

  const getNoText = () => {
    return phrases[noCount % phrases.length];
  };

  return (
    <div className="valentine-container h-screen">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <h1 className="text-4xl my-4">yay! i love you</h1>
        </>
      ) : (
        <>
          <img
            className="bear-heart-gif"
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl my-4 text-center">
            will you be my valentine?
          </h1>
          <div className="d-flex flex-wrap flex-col md:flex-row gap-3 align-items-center justify-content-center mb-2">
            <Button
              className="yes-button px-3"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              yes
            </Button>
            <Button
              className="no-button px-3"
              variant="danger"
              onClick={handleNoClick}
            >
              {getNoText()}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
