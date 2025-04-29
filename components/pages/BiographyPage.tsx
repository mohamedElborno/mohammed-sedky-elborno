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
import { formatLocalizedDate, formatYearOnly } from "../FormatLocalizedDate";
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
        className={`overflow-hidden hidden md:block dark:invert z-0 absolute opacity-20 top-20 ${
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
        className={`overflow-hidden w-auto h-auto lg:block dark:invert z-0 absolute opacity-20 bottom-56 ${
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

        <div className="grid gap-10 md:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-8 order-2 md:order-1">
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
          <Image
            src="/olive2.svg"
            alt="test"
            width={200}
            height={200}
            className={`overflow-hidden md:hidden dark:invert absolute top-10 z-0 opacity-100 drop-shadow-2xl -rotate-45 ${
              isRtl
                ? "-right-16 rotate-[220deg] scale-y-[-1] "
                : "-left-16 scale-x-[1]"
            }`}
          />
          <div className="flex flex-col order-1 md:order-2 sm:grid sm:grid-cols-2 md:flex md:flex-col space-y-8 space-x-0 sm:space-x-2 md:space-x-0">
            <div className="h-full p-4 md:h-fit rounded-lg border overflow-hidden shadow-lg dark:shadow-gray-500/20">
              <div className="rounded-md">
                <Image
                  src={
                    biography?.card?.image ||
                    "/placeholder.svg?height=400&width=300"
                  }
                  width={600}
                  height={800}
                  alt="Portrait of Sheikh"
                  className="w-full h-[400px] object-top object-cover rounded-md"
                />
              </div>
              <div className="mt-4 space-y-4">
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
                      -{" "}
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
            <div className="sm:h-fit rounded-lg border p-4 space-y-4 shadow-lg dark:shadow-gray-500/20 relative">
              <h3 className="font-semibold">
                {intl.formatMessage({ id: "biography.timeline" })}
              </h3>
              <Separator />
              <div className="space-y-4">
                {biography?.timeline?.map((item: Timeline, index: number) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium">
                      {item?.date
                        ? formatYearOnly(item.date)
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
