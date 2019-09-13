function Multiplier({ renderItem, count }) {
  let items = [];
  for (let i = 0; i < count; i++) {
    // Render item returns a ReactNode
    items.push(<li key={i}>{renderItem(i)}</li>);
  }
  return <ul>{items}</ul>;
}

function UsingMultiplier() {
  return (
    <div>
      <Multiplier
        count={10}
        renderItem={itemIndex => <span>Item number {itemIndex + 1}</span>}
      />
    </div>
  );
}
