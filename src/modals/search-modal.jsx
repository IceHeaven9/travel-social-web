import { useEffect, useRef, useState } from "react";
import { apiCall } from "../utils/api-call.js";

import "./search-modal.css";

export function SearchModal() {
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function onSearch(text) {
    try {
      const result = await apiCall("get", `/travels/search?text=${text}`);
      setResults(result.list);
    } catch (error) {
      if (error.error == "VALIDATION_ERROR") {
        //NO OP
      }
      setResults([]);
    }
  }

  return (
    <>
      <section className="search-modal">
        <input
          ref={inputRef}
          type="search"
          onChange={(evt) => onSearch(evt.target.value)}
        />

        <section className="search-results-section">
          {results.length === 0 && <p>No results</p>}
          {results.length > 0 && (
            <ul>
              {results.map((post) => {
                return (
                  <li key={post.id} className="search-result">
                    <img src={post.mainImage?.url} alt={post.title} />
                    {post.title}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </section>
    </>
  );
}
