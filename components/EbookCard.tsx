import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Ebook } from "@/types/types";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { RatingStars } from "./RatingsStars";
import { Badge } from "./ui/badge";

interface props {
  ebooks: Ebook;
}
function EbookCard({ ebooks }: props) {
  return (
    <Card className="rounded-lg ">
      <CardHeader className="p-0 rounded-lg ">
        <Image
          src={ebooks.coverImage}
          alt={ebooks?.title}
          width={1000}
          height={1000}
          className="rounded-t-lg h-60 object-cover"
        />
      </CardHeader>
      <CardContent className="pt-4 h-28 flex flex-col justify-center gap-1">
        <CardTitle>{ebooks?.title}</CardTitle>
        <div className="h-12  flex items-center ">
          <span className="py-4 font-semibold text-muted-foreground ">
            Autores:{" "}
            <span className="text-slate-800">{ebooks?.authors.join(", ")}</span>
          </span>
        </div>
        {/* <CardDescription>{ebooks?.description}</CardDescription> */}
      </CardContent>
      <CardFooter className="flex flex-col -mt-4">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-primary text-lg">
            {(ebooks.price * 15).toFixed(2)} MZN
          </span>

          <RatingStars rating={ebooks.rating} />
        </div>
        <div></div>
        <p className="w-full flex justify-between text-sm text-muted-foreground">
          <span>Categoria:</span>
          {/* <span>{ebooks.pages} pag.</span> */}
        </p>

        <div className="w-full justify-start gap-2">
          {ebooks.categories.slice(0, 3).map((category) => (
            <Badge key={Math.random()} className="text-xs mr-2">
              {category}
            </Badge>
          ))}
        </div>

        {/* <Button className='w-full mt-2'>
                <Link href=" "> 
                    Ver e-book
                </Link>
            </Button> */}
      </CardFooter>
    </Card>
  );
}

export default EbookCard;
