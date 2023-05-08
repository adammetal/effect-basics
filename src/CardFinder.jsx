import { useEffect, useRef, useState } from "react";
import CardList from "./CardList";

function CardFinder() {
  const [value, setValue] = useState('');
  const [term, setTerm] = useState("");
  const timer = useRef();

  function handleTermChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setTerm(value);
    }, 600);

    // cleanup function
    return () => {
      clearTimeout(timer.current);
    }
  }, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={handleTermChange} />
      <CardList term={term} />
    </div>
  );
}

export default CardFinder;
