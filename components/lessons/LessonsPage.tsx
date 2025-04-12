"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useIntl } from "react-intl";
import Image from "next/image";
import { Card } from "../ui/card";
import { LessonsPageType, LessonType } from "@/sanity/types";

export const LessonsPage = ({
  lessonsPage,
  locale,
}: {
  lessonsPage: LessonsPageType;
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
            {lessonsPage?.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {lessonsPage?.description}
          </p>
        </div>
        <Link href={`${lessonsPage?.url}`} target="_blank">
          <Image
            src={lessonsPage?.image}
            alt={lessonsPage?.title}
            width={6000}
            height={6000}
            className="h-auto w-full hover:drop-shadow transition-all duration-300 rounded-t-3xl"
          />
        </Link>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 md:pt-8">
          {lessonsPage?.lessons?.map((lesson: LessonType, index: number) => (
            <Link href={`${lesson?.url}`} key={index}>
              <Card className="overflow-hidden h-full flex flex-col dark:hover:bg-zinc-800 duration-300 hover:bg-zinc-100">
                <Image
                  src={lesson?.image || "/placeholder.svg?height=400&width=300"}
                  height={5000}
                  width={5000}
                  alt={lesson?.title}
                  className="w-full h-auto rounded-xl p-2 -translate-y-5"
                />

                <div className="p-4 py-0 -translate-y-5">
                  <h2 className="text-lg font-semibold">{lesson?.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {lesson?.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
