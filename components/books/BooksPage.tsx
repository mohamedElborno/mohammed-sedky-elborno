"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIntl } from "react-intl";
import { Book } from "@/sanity/types";

export const BooksPage = ({
  booksDetails,
  locale,
}: {
  booksDetails: Book[];
  locale: string;
}) => {
  const intl = useIntl();
  return (
    <div className="container py-12 px-6 md:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className={`h-4 w-4 ${locale === "ar" && "rotate-180"}`} />
        {intl.formatMessage({ id: "back-to-home" })}
      </Link>

      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">
            {intl.formatMessage({ id: "books.title" })}
          </h1>
          <p className="text-xl text-muted-foreground">
            {intl.formatMessage({ id: "books.description" })}
          </p>
        </div>
        <Separator />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {booksDetails?.map((book: Book, index: number) => (
            <div key={index}>
              <Card className="overflow-hidden h-full flex flex-col dark:hover:bg-zinc-800 duration-300 hover:bg-zinc-100">
                <Image
                  src={
                    book?.coverImage || "/placeholder.svg?height=400&width=300"
                  }
                  height={400}
                  width={300}
                  alt="Book cover"
                  className="w-full h-[400px] p-4 py-0 rounded-2xl"
                />

                <CardHeader className="p-4 py-0">
                  <CardTitle className="line-clamp-3 leading-relaxed">
                    {book?.title}
                  </CardTitle>
                </CardHeader>

                <CardDescription className="p-4 py-0">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {book?.description || ""}
                  </p>
                </CardDescription>

                <div className="mt-auto">
                  <CardFooter className="flex justify-between p-4 py-0">
                    {book?.url ? (
                      <Link href={book?.url} target="_blank">
                        <Button className="rounded-lg cursor-pointer">
                          {intl.formatMessage({ id: "books.bookRead" })}
                        </Button>
                      </Link>
                    ) : (
                      <span className="text-sm dark:text-red-900 text-red-800">
                        {intl.formatMessage({
                          id: "books.bookNotFoundPDF",
                        })}
                      </span>
                    )}
                  </CardFooter>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
