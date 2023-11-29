// eslint-disable-next-line @typescript-eslint/no-unused-vars

import {
  useEffect,
  useState
} from 'react';

export function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((value) => value + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(prop: { count: number }) {
  return (
    <p>
      You have read <strong>{prop.count}</strong> pieces of advice.
    </p>
  );
}

export default App;
