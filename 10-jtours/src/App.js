import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  //! çok önemli tıklanılan hariç olan verileri alır tekrar tours a set yöntemiyle gönderip render yapar
  //! böylelikle veriyi silmiş gibi oluruz sadece tıklanmamış veriler kalır
  //! burda fonksiyonu yazdık proplarla tour componentine gönderdik ve kullandık
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
