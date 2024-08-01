import type { Metadata } from "next";

type Props = {
  params: {
    title: string;
    description: string;
  };
};

export const metaData = ({ params }: Props): Metadata => {
  const { title, description } = params;

  return {
    title: title,
    description: description,
  };
};
