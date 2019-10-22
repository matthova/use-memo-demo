import React from "react";

const randomArray = [];
for (let i = 0; i < 1000; i++) {
  randomArray.push(Math.random());
}

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [count]);

  const mappedArray = React.useMemo(() => {
    return randomArray.map(num => (
      <div key={num}>{num}</div>
    ));
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
        }}
      >
        {/* {randomArray.map(num => (
          <div key={num}>{num}</div>
        ))} */}
        {mappedArray}
      </div>
    </div>
  );
}
