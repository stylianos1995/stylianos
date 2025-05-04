import Image from "next/image";
import { getImageUrl } from "@/utils/images";

interface ImageExampleProps {
  imagePath: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageExample = ({
  imagePath,
  alt,
  width = 300,
  height = 200,
}: ImageExampleProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <Image
        src={getImageUrl(imagePath)}
        alt={alt}
        width={width}
        height={height}
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
};
