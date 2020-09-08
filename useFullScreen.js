const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof onFullS !== "function") {
      callback(isFull);
    }
  };

  const triggerFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFullScreen, exitFullScreen };
};

// const onFullS = (isFull) => {
//   console.log(isFull ? "We are full" : "We are small");
// };
// const { element, triggerFullScreen, exitFullScreen } = useFullScreen(onFullS);
