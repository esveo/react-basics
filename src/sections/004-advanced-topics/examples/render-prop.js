function Multiplier({ renderItem, count }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<li key={i}>{renderItem(i)}</li>);
  }
  return <ul>{items}</ul>;
}

function App() {
  return (
    <div>
      <Multiplier
        count={10}
        renderItem={itemIndex => <span>Item number {itemIndex + 1}</span>}
      />
    </div>
  );
}
