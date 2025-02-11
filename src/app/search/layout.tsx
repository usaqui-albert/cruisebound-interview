"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChangeDeparturePort = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value: departurePortValue } = e.target;

    const params = new URLSearchParams(searchParams);
    if (departurePortValue) {
      params.set("port", departurePortValue);
    } else {
      params.delete("port");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeCruiseline = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: cruiselineValue } = e.target;

    const params = new URLSearchParams(searchParams);
    if (cruiselineValue) {
      params.set("ship", cruiselineValue);
    } else {
      params.delete("ship");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex h-screen">
      <aside className="min-w-64 xl:min-w-72 bg-blue p-5 hidden lg:block">
        <div className="flex justify-end mt-4">
          <MdArrowBack
            color="white"
            onClick={() => router.back()}
            fontSize={20}
          />
        </div>
        <p className="mt-4 pb-1 text-lg text-white/60 font-medium">
          Departure port
        </p>
        <input
          type="text"
          className="bg-white rounded p-2 w-full"
          onChange={handleChangeDeparturePort}
          placeholder="Any port"
          defaultValue={searchParams.get("port") ?? ""}
        />
        <p className="mt-4 pb-1 text-lg text-white/60 font-medium">
          Cruiseline
        </p>
        <input
          type="text"
          className="bg-white rounded p-2 w-full"
          onChange={handleChangeCruiseline}
          placeholder="Any ship"
          defaultValue={searchParams.get("ship") ?? ""}
        />
      </aside>
      <main className="flex flex-1 justify-center h-full overflow-scroll">
        {children}
      </main>
    </div>
  );
}
