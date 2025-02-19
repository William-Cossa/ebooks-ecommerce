import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Ebook } from '@/types/types';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { RatingStars } from './RatingsStars';

interface props {
  ebooks: Ebook;
}
function EbookCard({ebooks}: props) {


  return (
    <Card className='rounded-lg '>
        <CardHeader className='p-0 rounded-lg ' >
            <Image
                src={ebooks.coverImage}
                alt={ebooks?.title}
                width={1000}
                height={1000}
                className='rounded-t-lg h-60 object-cover'
            />
        </CardHeader>
        <CardContent className='pt-4 h-40 flex flex-col justify-between gap-1'>
             <CardTitle>{ebooks?.title}</CardTitle>
             <div>
                <span className='font-semibold text-muted-foreground'>Autores: </span>{ebooks?.authors.join(", ")}
             </div>
             <CardDescription>{ebooks?.description}</CardDescription>
        </CardContent>
        <CardFooter className='flex flex-col py-4'>
            <div className='flex justify-between items-center w-full'>
                <span className='font-bold text-primary text-lg'>{(ebooks.price * 15).toFixed(2)} MZN</span>

                <RatingStars rating={ebooks.rating}/>
            </div>
            <Button className='w-full mt-2'>
                <Link href=" "> 
                    Ver e-book
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default EbookCard