// theme-context.js
export const ThemeContext = React.createContext('defaultTheme');

export const ThemeProvider = ThemeContext.Provider;

// app.js:
import { ThemeProvider } from './theme-context';

function App() {
  const [theme, setTheme] = useState('defaultTheme');
  const contextValue = { theme, setTheme };
  return (
    <ThemeProvider value={contextValue}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
