import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = {
  // Using Inter as the primary for a cleaner, "Apple-pro" look
  // It handles Kazakh diacritics (like Ә, І, Ң) better than Manrope
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  
  primaryColor: 'dark',
  
  colors: {
    // Refined the deep dark shade (#051d3f) to a more neutral Apple "Midnight"
    dark: ['#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529', '#1a1a1a'],
  },

  headings: {
    // Apple uses the same font for headings and body, just with tighter tracking
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: '700',
  },
};

function App() {
  return (
    <div className="App">
      <MantineProvider theme={theme} forceColorScheme="light">
        <Header />
        <Main />
        <Footer />
      </MantineProvider>
    </div>
  );
}

export default App;
