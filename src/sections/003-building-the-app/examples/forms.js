function CreateUserForm() {
  const [formState, setFormState] = useState({
    name: '',
    isActive: false,
    role: 'user'
  });

  return (
    <form>
      <label htmlFor="create-user--name">Name</label>
      <input
        id="create-user--name"
        type="text"
        value={formState.name}
        onChange={e => setFormState({ ...formState, name: e.target.value })}
      />
    </form>
  );
}
