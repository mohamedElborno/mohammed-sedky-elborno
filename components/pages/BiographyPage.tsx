"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PortableText } from "@portabletext/react";
import { useIntl } from "react-intl";
import { PortableTextComponents } from "../BlockStyle";
import { formatLocalizedDate } from "../FormatLocalizedDate";
import { Biography, Timeline } from "@/sanity/types";
export const BiographyPage = ({
  locale,
  biography,
}: {
  locale: string;
  biography: Biography;
}) => {
  const intl = useIntl();
  const isRtl = locale === "tr";
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Image
        src="/olive2.svg"
        alt="test"
        width={400}
        height={400}
        className={`overflow-hidden hidden lg:block dark:invert z-0 absolute opacity-10 md:opacity-20 top-20 ${
          isRtl
            ? "-left-8 scale-x-[1] rotate-[9deg]"
            : "-right-8 -scale-x-[1] -rotate-[9deg]"
        }`}
      />
      <Image
        src="/olive10.svg"
        alt="test"
        width={600}
        height={600}
        className={`overflow-hidden hidden w-auto h-auto lg:block dark:invert z-0 absolute opacity-10 md:opacity-20 bottom-56 ${
          isRtl
            ? "-right-8 rotate-[9deg]"
            : "-left-8 -scale-x-[1] -rotate-[9deg]"
        }`}
      />
      <div className="container py-12 px-6 md:px-8 relative">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className={`h-4 w-4 ${locale === "ar" && "rotate-180"}`} />
          {intl.formatMessage({ id: "back-to-home" })}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold sm:text-5xl">
                {biography?.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {biography?.subtitle}
              </p>
            </div>

            <div className="prose prose-stone dark:prose-invert max-w-none">
              <PortableText
                components={PortableTextComponents}
                value={biography?.description || ""}
              />
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col space-y-8 sm:space-x-4 lg:space-x-0">
            <div className="h-full lg:h-fit rounded-lg border overflow-hidden shadow-lg dark:shadow-gray-500/20">
              <Image
                src="/olive2.svg"
                alt="test"
                width={200}
                height={200}
                className={`overflow-hidden lg:hidden dark:invert absolute top-10 z-20 drop-shadow-2xl -rotate-45 ${
                  isRtl
                    ? "-right-16 scale-x-[-1] scale-y-[-1]"
                    : "-left-16 scale-x-[1]"
                }`}
              />
              <Image
                src={
                  biography?.card?.image ||
                  "/placeholder.svg?height=400&width=300"
                }
                width={600}
                height={800}
                alt="Portrait of Sheikh"
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="p-4 space-y-4">
                <h3 className="font-semibold text-xl">
                  {biography?.card?.name}
                </h3>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {formatLocalizedDate(
                        biography?.card?.birthDate,
                        locale as "ar" | "tr"
                      )}{" "}
                      -
                      {formatLocalizedDate(
                        biography?.card?.deathDate,
                        locale as "ar" | "tr"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{biography?.card?.birthPlace}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>{biography?.card?.majorEducationalInstitution}</span>
                  </div>
                  {biography?.card?.publishedWorks?.map(
                    (book: { title: string }, index: number) => (
                      <div
                        className="flex items-center-safe gap-2 text-sm"
                        key={index}
                      >
                        <BookOpen className="flex min-h-4 min-w-4 max-w-4 max-h-4 text-muted-foreground" />
                        <span>{book?.title}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="lg:h-fit rounded-lg border p-4 space-y-4 shadow-lg dark:shadow-gray-500/20 relative">
              <h3 className="font-semibold">
                {intl.formatMessage({ id: "biography.timeline" })}
              </h3>
              <Separator />
              <div className="space-y-4">
                {biography?.timeline?.map((item: Timeline, index: number) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium">
                      {item?.date
                        ? formatLocalizedDate(item.date, locale as "ar" | "tr")
                        : "تاريخ غير متوفر"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item?.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
