import QuoteCard from "@/components/Quote/Card";
import { getTodayQuote } from "./utils/getTodayQuote";

export default async function Home() {
  const todayQuote = await getTodayQuote();

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Quotive</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          <span className="mr-2">✨</span> Quote of the Day
        </h2>
        <QuoteCard quote={todayQuote.q} author={todayQuote.a} />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          <span className="mr-2">🎲</span> Generate Random Quote
        </h2>
        <QuoteCard random />
      </section>

      <footer className="mt-10 text-center text-sm text-gray-600">
        Quotes provided by{" "}
        <a
          href="https://zenquotes.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ZenQuotes API
        </a>
      </footer>
    </main>
  );
}
