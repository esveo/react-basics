function UserWelcomeShouter(props) {
  const { userName } = props;

  function shoutName() {
    alert(userName);
  }

  useEffect(() => {
    shoutName();
  }, [shoutName]);
  return null;
}
