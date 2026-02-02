import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = {
  fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
  primaryColor: 'dark',
  colors: {
    dark: ['#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529', '#051d3f'],
  },
  headings: {
    fontFamily: "'Manrope', sans-serif",
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
