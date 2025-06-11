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

import { getCartList } from "@/lib/actions/cartList-actions";
import { CartListButton } from "@/components/AddCartListButton";

interface props {
  ebook: Ebook;
}
async function EbookCard({ ebook }: props) {
  const cartList = await getCartList();

  const iscartListed = cartList.some((item) => item.id === ebook.id);

  return (
    <Card className=" rounded-lg lg  :max-w-80 2xl:max-w-none flex flex-col gap-1">
      <CardHeader className="p-0 rounded-lg ">
        <Image
          src={ebook?.coverImage}
          alt={ebook?.title}
          width={1000}
          height={1000}
          className="rounded-t-lg h-60 object-cover"
        />
      </CardHeader>
      <CardContent className="pt-4 h- flex flex-col justify-center gap-1 ">
        <CardTitle className="text-xl ">
          <Link
            className="hover:text-primary transition-all uppercase "
            href={`books/${ebook?.id}`}
          >
            {ebook?.title}
          </Link>
        </CardTitle>
        <div className="h-12  flex items-center ">
          <span className="py-4 font-semibold text-muted-foreground ">
            Autores:{" "}
            <span className="text-slate-800">{ebook?.authors.join(", ")}</span>
          </span>
        </div>
        {/* <CardDescription>{ebook?.description}</CardDescription> */}
      </CardContent>
      <CardFooter className="flex flex-col -mt-4">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-primary text-lg">
            {(ebook.price * 15).toFixed(2)} MZN
          </span>

          <RatingStars rating={ebook.rating} />
        </div>
        <div className="w-full flex justify-between">
          <p className="w-full flex flex-col text-sm text-muted-foreground">
            <span>Categoria:</span>
            {/* <span>{ebook.pages} pag.</span> */}
            <div className="w-full justify-start gap-2">
              {ebook.categories.slice(0, 3).map((category) => (
                <Badge key={Math.random()} className="text-xs mr-2">
                  {category}
                </Badge>
              ))}
            </div>
          </p>

          <CartListButton book={ebook} initialIscartListed={iscartListed} />
        </div>

        {/* <Button className="w-full mt-2">
          <Link href=" ">Ver e-book</Link>
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export default EbookCard;
