import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context.js';

function Toggle() {
  const contextValue = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={contextValue.theme === 'darkTheme'}
        onChange={e =>
          contextValue.setTheme(e.target.checked ? 'darkTheme' : 'defaultTheme')
        }
      />
      Activate dark mode
    </label>
  );
}
