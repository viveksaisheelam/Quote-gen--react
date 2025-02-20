import { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      console.log("your data is or your qiote sis:"+data);
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    console.log("loading the pahe!");
    fetchQuote();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm w-50">
        <p className="lead">"{quote}"</p>
        <p className="text-end text-muted">- {author}</p>
        <button className="btn btn-primary mt-3 w-100" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
    // <h1>hello </h1>
  );
};

export default QuoteGenerator;
