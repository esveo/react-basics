function ResetButton() {
  const globalCounter = useGlobalCounter();

  return (
    <button onClick={() => globalCounter.reset()}>
      Current count: {globalCounter.counter}
    </button>
  );
}
