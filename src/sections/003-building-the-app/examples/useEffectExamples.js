function Examples(props) {
  // Reset state when userId changes.
  const [state, setState] = useState(null);
  useEffect(() => {
    setState(null);
  }, [props.userId]);

  // Synchronize document title with the name prop and reset in cleanup
  useEffect(() => {
    const previousTitle = document.title;
    document.title = props.name;
    return function cleanup() {
      document.title = previousTitle;
    };
  });
}
