import React, { useEffect, useState } from 'react';

export function DemoComponent(props) {
  const [text, setText] = useState('');
  const textLength = text.length;

  useEffect(() => {
    console.log('Timeout scheduled for state: ' + text);
    setTimeout(() => {
      console.log('Timeout fired for state: ' + text);
    }, 1000);
    return () => {
      console.log('cleanup fired for state: ' + text);
    };
  }, [text]);
  console.log('Rendered with state: ' + text);

  return (
    <>
      <p>Text length: {textLength}</p>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          console.log(text, e.target.value);
        }}
      />
    </>
  );
}
