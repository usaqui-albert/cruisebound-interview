import { SailingCard } from "@/app/ui/sailing-card";
import { Sailing } from "@/app/lib/definitions";
import { fetchSailings } from "@/app/lib/data";
// import { sailings } from "@/app/lib/placeholder-data";

interface SearchParams {
  port?: string;
  ship?: string;
  page?: string;
}

export default async function SearchPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const port = searchParams?.port || "";
  const ship = searchParams?.ship || "";
  const sailings = await fetchSailings({ port, ship });

  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="grid items-center justify-items-center min-h-screen p-2 sm:p-4">
      <main className="flex flex-col w-full xl:max-w-[992px] gap-6">
        <h1 className="text-xl">Some filters</h1>
        {/*Not good to use index but there wasn't id available in payload response*/}
        {sailings.map((sailing: Sailing, index: number) => (
          <SailingCard sailing={sailing} key={index} />
        ))}
      </main>
    </div>
  );
}
