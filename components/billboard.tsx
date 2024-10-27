import { Billboard as BillboardType } from "@/types";
import hero from "@/public/hero.jpeg"

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {

  const backgroundImageUrl = data?.imageUrl || hero;

  console.log(data, "--billboardData");

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-7xl text-gray-500 sm:max-w-xl max-w-xs">
             {/* {data.label}  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
