const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return state;
};

// const { y } = useScroll();
// <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>HI</h1>
