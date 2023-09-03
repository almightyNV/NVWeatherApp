import { useState , useRef} from "react";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("");

  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5606c1d33mshdacb165fdfaf044p197408jsnb38c44723ada",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  let [data, setData] = useState();

  async function getData() {
    try {
      const response = await fetch(url, options);
      data = await response.json();
      setData(data);
    } catch (error) {
      if (location === "") alert("Enter the location name");
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let display = mainRef.current;
    getData();
  };

  const mainRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-slate-500">
        <div
          ref={mainRef}
          className="md:w-2/6 md:h-4/6 bg-white flex justify-center items-center flex-col gap-7 p-10 rounded-3xl shadow-lg shadow-black"
        >
          <h1 className="md:text-5xl font-bold text-blue-800 text-center">
            NV Weather App
          </h1>
          <img
            src="https://imgs.search.brave.com/7sL6VxylIpm9vo9Xev99INdyKeoVOCsaAlYeExwH4Jg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIyLzczLzE4/LzM2MF9GXzEyMjcz/MTg3N19BYnF3aGtv/M3lkY2tWcFU0eTJF/U3kyaFVtZTdYQnlK/Qy5qcGc"
            alt="NV Weather App Logo"
            className="md:w-2/5 md:h-2/5 "
          />
          <h1 className="text-2xl font-semibold text-center">
            Enter your city name below <span className="text-red-600">*</span>
          </h1>
          <form
            className="flex justify-center items-center flex-col gap-5 md:w-full md:h-full"
            onSubmit={handleSubmit}
          >
            <input
              onChange={(e) => {
                let newLocation = "";
                newLocation = e.target.value;
                setLocation(newLocation);
              }}
              className="w-4/6 h-15 border-black border-2 px-2 py-3"
              type="text"
              placeholder="Enter the location name"
              required
            />
            <button
              className="bg-blue-300 lg:w-3/6 lg:h-20 lg:px-6 lg:py-1 rounded-2xl text-center text-xl font-semibold border-slate-800 border-2"
              onClick={() => setClicked(true)}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        {clicked && data && <Weather props={data}/>}
      </div>
    </>
  )
}


export default App;
