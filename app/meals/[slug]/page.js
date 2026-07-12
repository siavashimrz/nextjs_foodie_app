export default async function MealDetailPage({ params }) {
  const { slug } = await params;
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>{slug}</h1>
    </main>
  );
}
