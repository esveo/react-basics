function Form() {
  const [formState, setFormState] = useState({});

  return (
    <form
      onSubmit={submitEvent => {
        // Prevent default to prevent reloading page (as forms do by default)
        submitEvent.preventDefault();
        // Send data to backend or call function from props etc.
        console.log(formState);
      }}
    >
      {/* ... */}
      <button type="submit">Save</button>
      <button type="button" onClick={() => setFormState({})}>
        Reset
      </button>
    </form>
  );
}
