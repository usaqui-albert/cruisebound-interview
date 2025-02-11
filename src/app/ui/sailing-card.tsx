import { useMemo } from "react";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";

import { Button } from "@/app/ui/button";
import { Small, Subtitle } from "@/app/ui/typography";
import { formatSailingDepartureAndReturnDates } from "@/app/lib/utils/dates";
import { renderItinerary } from "@/app/ui/renderers";
import { Sailing } from "@/app/lib/definitions";

export function SailingCard({ sailing }: { sailing: Sailing }) {
  const departureAndReturnDatesString = useMemo(() => {
    return formatSailingDepartureAndReturnDates(
      sailing.departureDate,
      sailing.returnDate,
    );
  }, [sailing.departureDate, sailing.returnDate]);

  const itineraryToRender = useMemo(() => {
    return renderItinerary(sailing.itinerary);
  }, [sailing.itinerary]);

  return (
    <article className="flex shadow-lg rounded-2xl overflow-hidden w-full">
      {/*Sailing picture*/}
      <div className="relative w-72">
        <div className="w-fit m-4 px-2.5 py-1 bg-black/75 rounded">
          <p className="text-white font-medium">
            {departureAndReturnDatesString}
          </p>
        </div>
        <Image
          className="-z-10"
          src={sailing.ship.image}
          alt={`Picture of ${sailing.ship.name}`}
          fill
        />
      </div>

      {/*Sailing content info*/}
      <div className="flex flex-col flex-1">
        {/*Top sailing content info*/}
        <div className="flex flex-col p-6">
          <div className="flex justify-between">
            <div>
              <header>
                <h3 className="text-2xl font-semibold">{sailing.name}</h3>
              </header>
              <div className="flex gap-4 items-center mt-1.5">
                <Subtitle>{sailing.region}</Subtitle>
                <Subtitle>{sailing.duration} nights</Subtitle>
                <div className="flex items-center">
                  <MdStarRate color="#f2ad3d" fontSize="20" />
                  <p className="font-semibold ml-0.5 mr-1.5">
                    {sailing.ship.rating}
                  </p>
                  <Small>{sailing.ship.reviews} reviews</Small>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="float-end"
                src={sailing.ship.line.logo}
                width={100}
                height={50}
                alt={sailing.ship.name}
              />
              <div className="text-right">
                <Small>{sailing.ship.name}</Small>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 mt-4 items-center flex-wrap">
            {itineraryToRender}
          </div>
        </div>

        {/*Bottom price content info*/}
        <footer className="flex bg-gray-100 pt-4 pb-5 px-6 justify-end">
          <div className="mr-5">
            <Small>Interior from</Small>
            <div className="flex justify-end">
              <p className="text-sm mt-0.5 mr-0.5">$</p>
              <p className="text-2xl font-medium">{sailing.price}</p>
            </div>
          </div>
          <Button>
            <p className="text-white font-semibold text-lg">See sailings</p>
          </Button>
        </footer>
      </div>
    </article>
  );
}
