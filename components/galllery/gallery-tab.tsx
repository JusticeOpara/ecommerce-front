import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}
const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absoulte h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              className="object-cover object-center"
              alt="image"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};
export default GalleryTab;
