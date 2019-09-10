function MouseMoveShouter(props) {
  useEffect(() => {
    function handleMouseMove() {
      // Captures the props of the render where this effect ran.
      alert(props.thingToShout);
    }
    document.addEventListener('mousemove', handleMouseMove);

    return function cleanup() {
      document.removeEventListener('mousemove', handleMouseMove);
    };

    // Only add this event listener on the initial render
  }, []);
  return null;
}
