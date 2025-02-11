import { Sailing } from "@/app/lib/definitions";

export async function fetchSailings({
  port,
  ship,
}: {
  port: string;
  ship: string;
}) {
  try {
    const sailingsResponse = await fetch(
      "https://sandbox.cruisebound-qa.com/sailings",
    );
    const sailings = await sailingsResponse.json();
    const withImageSailings = sailings.results.filter((sailing: Sailing) =>
      Boolean(sailing.ship.image),
    );
    if (ship.length > 2) {
      return withImageSailings.filter((sailing: Sailing) => {
        const sailingShipName = sailing.ship.name.toLowerCase();
        return sailingShipName.includes(ship.toLowerCase());
      });
    } else {
      return withImageSailings;
    }
  } catch (error) {
    // TODO: log error
    console.error(error);
  }
}
