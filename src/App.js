import './App.scss';
import {Card}  from './components';
import movies from './data.json';

function App() {
  return (
    <main>
      {movies.map(movie => {
        return (
          <Card className='mr' key={movie.id}>
            <Card.Image src={movie.image} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.desc}</Card.Text>
              <Card.Button>{movie.ctaText}</Card.Button>
            </Card.Body>
          </Card>
        )
      })}
    </main>
  );
}

export default App;