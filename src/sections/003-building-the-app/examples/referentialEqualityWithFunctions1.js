function UserWelcomeShouter(props) {
  const { userName } = props;

  function shoutName() {
    alert(userName);
  }

  useEffect(() => {
    shoutName();
  });
  return null;
}
