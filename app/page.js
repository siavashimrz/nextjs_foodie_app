import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link style={{ color: "white", textAlign: "center" }} href="/meals">
          Go to Meals
        </Link>
      </p>
      <p>
        <Link href="/meals/share">Go to Share Meals</Link>
      </p>
      <p>
        <Link href="/meals/test-1">Go to Meals test1</Link>
      </p>
      <p>
        <Link href="/meals/test-2">Go to Meals test2</Link>
      </p>
      <p>
        <Link href="/community">Go to Community</Link>
      </p>
    </main>
  );
}
