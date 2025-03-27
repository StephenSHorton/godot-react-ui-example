interface Window {
  ipc: {
    postMessage: (message: string) => void;
  };
}

interface CustomMessageEvent extends Event {
  detail: string;
}

interface DocumentEventMap {
  message: CustomMessageEvent;
}
