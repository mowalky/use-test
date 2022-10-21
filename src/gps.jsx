const getGPS = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
});

export const GPS = () => {
  const data = use(getGPS);
  return <div>{JSON.stringify(data)}</div>;
};
