// class vs className
let app = <div className="app-root">App Root</div>;

// Every tag needs to be closed, but self closing is possible
app = (
  <div>
    <br />
    <div />
  </div>
);

// for attribute vs htmlFor
app = (
  <div>
    <label htmlFor="test">Label</label>
    <input id="test" />
  </div>
);
