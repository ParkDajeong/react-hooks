const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

// const { enablePrevent, disablePrevent } = usePreventLeave();
// <button onClick={enablePrevent}>Protect</button>
// <button onClick={disablePrevent}>Unprotect</button>
