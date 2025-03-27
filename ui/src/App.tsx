import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";

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
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default App;
