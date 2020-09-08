const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;

  const handle = (event) => {
    const { clientY } = event;

    // 윗쪽으로 마우스로 벗어났을 때만 작동..
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

// const begForLife = () => console.log("plz don't leave");
// useBeforeLeave(begForLife);
