
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import "./index.css"

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([])
  
  const removeTour = (id) => {
    const newTour = tours.filter((tour)=>tour.id !== id);

    setTours(newTour);
  }

  const fetchTour = async()=>{
    setLoading(true)

    try {
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setTours(tour);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
    
  }
  useEffect(()=>{
    fetchTour();
  },[])

  if(loading){
    return(
      <main>
          <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={()=>fetchTour()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour}/>
    </>
  );
}

export default App;
