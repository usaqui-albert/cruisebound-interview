import { Sailing } from "@/app/lib/definitions";

export const sailings: Sailing[] = [
  {
    departureDate: "2021-12-29",
    itinerary: ["Cape town", "Seychelles", "Mauritius", "Cape town"],
    name: "Cape town & South Africa Adventure",
    duration: 4,
    price: 566,
    region: "Africa",
    returnDate: "2022-01-02",
    ship: {
      image: "https://images.unsplash.com/photo-1548574505-12caf0050b5b",
      name: "Sovereign of the Seas",
      rating: 4.12,
      reviews: 54,
      line: {
        logo: "https://s3.amazonaws.com/cms.ipressroom.com/412/files/202401/65a05cf13d63321dea1158db_Carnival+Cruise+Line+Logo/Carnival+Cruise+Line+Logo_546b4934-4026-4c91-bee0-23009835cbf5-prv.jpg",
        name: "Sovereign of the Seas",
      },
    },
  },
  {
    price: 319.0,
    name: "7 Night Mediterranean - Western Cruise",
    ship: {
      name: "MSC Virtuosa",
      rating: 4.5,
      reviews: 123,
      image:
        "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
      line: {
        logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
        name: "MSC Cruises",
      },
    },
    itinerary: [
      "Naples, Italy",
      "Palma de Mallorca, Spain",
      "Barcelona, Spain",
      "Marseille, France",
      "Genoa, Italy",
      "La Spezia (Cinque Terre), Italy",
      "Naples, Italy",
    ],
    region: "Caribbean",
    departureDate: "2022-11-27",
    returnDate: "2022-12-04",
    duration: 7,
  },
  {
    price: 319.0,
    name: "7 Night Mediterranean - Western Cruise",
    ship: {
      name: "MSC Virtuosa",
      rating: 4.5,
      reviews: 123,
      image:
        "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1656397931/production/small_msc_vi_item_76c6c4b53c.png",
      line: {
        logo: "https://res.cloudinary.com/cruisebound/image/upload/f_auto/v1649242239/production/line_logo_6_4bbd4246_eded_4690_bd5e_b184f4a64e82_0f9ac3171a.jpg",
        name: "MSC Cruises",
      },
    },
    itinerary: [
      "Naples, Italy",
      "Palma de Mallorca, Spain",
      "Barcelona, Spain",
      "Marseille, France",
      "Genoa, Italy",
      "La Spezia (Cinque Terre), Italy",
      "Naples, Italy",
    ],
    region: "Caribbean",
    departureDate: "2022-11-23",
    returnDate: "2022-11-30",
    duration: 7,
  },
];
