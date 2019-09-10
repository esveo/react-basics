function UserWelcomeShouter(props) {
  const { userName } = props;

  const shoutName = useCallback(() => {
    alert(userName);
  }, [userName]);

  useEffect(() => {
    shoutName();
  }, [shoutName]);
  return null;
}
