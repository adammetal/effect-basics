import { useEffect, useState } from "react";
import { getRandomCard } from "./client/random";

function RandomCard() {
  const [card, setCard] = useState();

  useEffect(() => {
    async function getCard() {
      const data = await getRandomCard()
      setCard(data);
    }

    getCard();
  }, []);

  return (
    <div>
      <h1>Random card</h1>
      <pre>{JSON.stringify(card, null, 2)}</pre>
    </div>
  )
}

export default RandomCard;
