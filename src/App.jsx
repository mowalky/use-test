import { experimental_use as use, Suspense } from "react";

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
      <Suspense>
        <GPS />
      </Suspense>
    </div>
  );
}

export default App;
