import Navigation from "../components/Navigation";
import Pieces from "./pieces";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <div>
        <span role="img" aria-label={isValidating ? "Validating" : "Ready"}>
          {isValidating ? "🔄" : "✅"}
        </span>
        Hello {data.name}!
      </div>
    </>
  );
}
