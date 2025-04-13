import {
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";

type PortableTextBlockComponentProps =
  PortableTextComponentProps<PortableTextBlock>;

export const PortableTextComponents = {
  block: {
    h1: ({ children }: PortableTextBlockComponentProps) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextBlockComponentProps) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }: PortableTextBlockComponentProps) => (
      <h3 className="text-2xl font-semibold mb-3">{children}</h3>
    ),
    normal: ({ children }: PortableTextBlockComponentProps) => (
      <p className="mb-4 text-xl lg:text-justify break-words leading-relaxed dark:text-gray-200 text-gray-950 max-w-[900px]">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextBlockComponentProps) => (
      <ul className="list-disc text-lg leading-relaxed pl-6 max-w-[900px] dark:text-zinc-300 text-zinc-700">
        {children}
      </ul>
    ),
    number: ({ children }: PortableTextBlockComponentProps) => (
      <ol className="list-decimal text-lg leading-relaxed pl-6 max-w-[900px]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextBlockComponentProps) => (
      <li className="mb-2">{children}</li>
    ),
  },
};
