import { experimental_use as use, Suspense } from "react";

const Names = () => {
  const ids = use(fetch("/ids.json").then((res) => res.json()));
  return <div>{JSON.stringify(ids)}</div>;
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
