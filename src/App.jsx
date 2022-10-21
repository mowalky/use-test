import { experimental_use as use } from "react";

const getGPS = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
});

const GPS = () => {
  const data = use(getGPS);
  return <div>{JSON.stringify(data)}</div>;
};

function App() {
  return (
    <div className="App">
      <GPS />
    </div>
  );
}

export default App;
