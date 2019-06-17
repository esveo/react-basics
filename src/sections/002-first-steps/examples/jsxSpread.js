// Can be used to pass object as separated props

const props = {
  className: 'app-root',
  id: ' root',
  onClick: () => console.log('Hello World')
};

let app = <div {...props} />;
// Same as
// <div className={props.className} id={props.id} onClick={props.onClick} />

// Overwrites are possible:
app = <div {...props} className="my-root" />;
// Same as
// <div id={props.id} onClick={props.onClick} className="my-root" />
