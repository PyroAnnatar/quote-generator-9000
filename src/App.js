import React, { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [fetchyIsDonesy, setFetchyIsDonesy] = useState(false);
  async function fetchy() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      console.log(data);
      setQuotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchyIsDonesy(true);
    }
  }
  useEffect(() => {
    fetchy();
  }, []);

  useEffect(() => {
    setQuote(rando());
  }, [fetchyIsDonesy]);

  function rando() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function handleClick() {
    setQuote(rando());
  }

  return (
    <>{quote && <QuoteDisplay quote={quote} handleClick={handleClick} />}</>
  );
};

export default App;
