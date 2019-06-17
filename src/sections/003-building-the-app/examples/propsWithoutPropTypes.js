function List(props) {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder={props.placeholder}
      />
      <ul>
        {props.items
          .filter(item => props.doesItemMatchFilter(filter, item))
          .sort(props.itemSorter)
          .map(item => (
            <li
              className={props.getItemClassName(item)}
              key={props.getItemKey(key)}
            >
              {props.renderItem(item)}
            </li>
          ))}
      </ul>
    </div>
  );
}
