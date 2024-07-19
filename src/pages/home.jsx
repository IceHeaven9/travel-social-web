import { useEffect, useState } from "react";
import { TravelCard } from "../components/travel-card.jsx";
import { LoadingSpinner } from "../components/loading-spinner.jsx";
import { useSafeApiCall } from "../hooks/safe-api-call.js";
import useInfiniteScroll from "react-infinite-scroll-hook";

export function HomePage() {
  const [travels, setTravels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);

  const apiCall = useSafeApiCall();

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasNextPage,
    onLoadMore: async () => {
      await getTravels();
    },
  });

  async function getTravels() {
    setIsLoading(true);
    const result = await apiCall("get", "/travels?offset=" + travels.length);
    setHasNextPage(result.hasNextPage);
    setTravels((old) => [...old, ...result.list]);
    setIsLoading(false);
  }

  useEffect(() => {
    getTravels();
  }, []);

  return (
    <main>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {travels.map((travel) => {
          return (
            <TravelCard
              key={travel.id}
              travel={travel}
              onDelete={() => {
                setTravels((old) => old.filter((t) => t.id !== travel.id));
              }}
            />
          );
        })}
        {(isLoading || hasNextPage) && (
          <div ref={sentryRef}>
            <LoadingSpinner />
          </div>
        )}
      </ul>
    </main>
  );
}
