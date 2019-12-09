import raw from 'raw.macro';
import React, { useState } from 'react';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { DemoComponent } from './DemoComponent';

export function DemoComponentWithSource() {
  const [state, setState] = useState('');

  return (
    <div onChange={e => setState(e.target.value)}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {[...state].map((s, i) => (
          <div key={i} style={{ fontSize: '0.7em' }}>
            <CodeBlock
              style={{ minWidth: 0 }}
              source={raw('./DemoComponent.txt').replace(
                /%STATE%/g,
                state.slice(0, i + 1)
              )}
            />
          </div>
        ))}
      </div>
      <DemoComponent />
    </div>
  );
}
