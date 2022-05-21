import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section>
        <div className='title'>
          <h1>Görüşlerimiz</h1>
          <div className='underline'></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
