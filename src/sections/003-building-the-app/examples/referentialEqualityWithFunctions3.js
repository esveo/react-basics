function UserWelcomeShouter(props) {
  const { userName } = props;

  useEffect(() => {
    function shoutName() {
      alert(userName);
    }
    shoutName();
  }, [userName]);
  return null;
}
