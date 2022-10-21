import { experimental_use as use, Suspense, useState } from "react";
const idsFetch = fetch("/ids.json").then(async (res) => ({
  status: res.status,
  data: res.status === 200 ? await res.json() : null,
}));

const cachedFetches = {};
const cachedFetch = (url) => {
  if (!cachedFetches[url]) {
    cachedFetches[url] = fetch(url).then(async (res) => ({
      status: res.status,
      data: res.status === 200 ? await res.json() : null,
    }));
  }
  return cachedFetches[url];
};

const Detail = ({ id }) => {
  const data = use(cachedFetch(`/${id}.json`));

  console.log(`Rendering Detail ${id}`);

  return <div>{JSON.stringify(data)}</div>;
};

const Names = () => {
  const ids = use(idsFetch);
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {ids?.data.map((id) => (
        <button onClick={() => setSelected(id)} key={id}>
          Load {id}
        </button>
      ))}
      {selected && <Detail id={selected} />}
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
