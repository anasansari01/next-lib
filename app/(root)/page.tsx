import { Button } from "@/components/ui/button";
import Image from "next/image";

import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

export default function Home() {
  return (
    <>
      <BookOverview/>
      <BookList/>
    </>
  );
}
