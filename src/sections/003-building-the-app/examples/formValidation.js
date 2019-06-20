function Form() {
  const [formState, setFormState] = useState({ name: '', email: '' });

  const nameValid = formState.name.length > 3;
  const emailValid =
    formState.email.includes('@') && formState.email.length > 3;
  const formValid = nameValid && emailValid;

  return (
    <form>
      {nameValid || <p>Name must be longer than 3 characters.</p>}
      {emailValid || <p>Email must be valid</p>}
      <button type="submit" disabled={!formValid}>
        Save
      </button>
    </form>
  );
}
