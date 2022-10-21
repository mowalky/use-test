import { experimental_use as use, Suspense } from "react";
const idsFetch = fetch("/ids.json").then(async (res) => ({
  status: res.status,
  data: res.status === 200 ? await res.json() : null,
}));
const Names = () => {
  const ids = use(idsFetch);
  return (
    <div>
      {ids.data?.map((id) => (
        <button key={id}>{id}</button>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Suspense>
        <Names />
      </Suspense>
    </div>
  );
}

export default App;
