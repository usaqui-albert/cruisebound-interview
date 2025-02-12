import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main>
        <div className="text-center underline">
          <Link href="/search">Click here to search sailings</Link>
        </div>

        <div className="max-w-[600px]">
          <h2 className="text-md font-semibold mt-6">Results:</h2>
          <ul>
            <li>- List search results according to design: Done</li>
            <li>
              - Page and all components should have responsive layout: Not
              completed
            </li>
            <li>- Show total result count: Missing</li>
            <li>- Handle pagination locally (10 results per page): Missing</li>
            <li>
              - Filter search results locally: only working with Cruiseline
              input (Ship)
            </li>
            <li>- Filter by Cruise Line and Departure Date: only Cruiseline</li>
            <li>- Sort by Price, Departure Date, and Duration: Missing.</li>
          </ul>

          <h2 className="text-md font-semibold mt-6">Others:</h2>
          <ul>
            <li>- Attention to detail: Focus styling in sailing card</li>
            <li>- Dynamic URL query params update base on search inputs</li>
            <li>
              - Attention to detail: edge cases in date range formatting to
              handle different months and years.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
