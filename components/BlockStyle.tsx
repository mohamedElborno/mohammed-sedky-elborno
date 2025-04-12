import {
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";

type PortableTextBlockComponentProps =
  PortableTextComponentProps<PortableTextBlock>;

export const PortableTextComponents = {
  block: {
    h1: ({ children }: PortableTextBlockComponentProps) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextBlockComponentProps) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    normal: ({ children }: PortableTextBlockComponentProps) => (
      <p className="mb-4 leading-relaxed dark:text-gray-200 text-gray-950">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextBlockComponentProps) => (
      <ul className="list-disc pl-6">{children}</ul>
    ),
    number: ({ children }: PortableTextBlockComponentProps) => (
      <ol className="list-decimal pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextBlockComponentProps) => (
      <li className="mb-2">{children}</li>
    ),
  },
};
