import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function App() {
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const onClick = () => {
    window.ipc.postMessage("game_started.emit");
  };

  useEffect(() => {
    const { signal, abort } = new AbortController();

    document.addEventListener(
      "message",
      (event) => {
        if (event.detail === "game_started") {
          setGameIsStarted(true);
        }
      },
      { signal }
    );

    return abort;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      {!gameIsStarted && <Button onClick={onClick}>Start</Button>}
    </div>
  );
}

export default App;
