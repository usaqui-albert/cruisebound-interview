import { Body } from "@/app/ui/typography";
import { MdArrowForward } from "react-icons/md";

export const renderItinerary = (itinerary: string[]): React.JSX.Element[] => {
  return itinerary.flatMap((port, index) => {
    const isLastPort = index >= itinerary.length - 1;
    const key = `${port}-${index}`;
    return isLastPort
      ? [<Body key={key}>{port}</Body>]
      : [
          <Body key={key}>{port}</Body>,
          <MdArrowForward key={index} color="2564eb"></MdArrowForward>,
        ];
  });
};
