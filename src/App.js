import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className='App'>
      <div className='page-wrapper'>
        <header className='header'>
          <img
            className='header-logo'
            src='/images/marvel-mania-logo.png'
            alt='Logo'
          />
        </header>
        <Body />
        <footer className='footer'>
          <h3 className='footer-link'>
            <a href='www.anubhabkarki.com'>www.anubhabkarki.com</a>
          </h3>
          <h3 className='footer-link'>©2022AnubhabKarki</h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
