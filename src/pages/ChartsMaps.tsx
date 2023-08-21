import LineGraph from "../components/chartComp/LineGraph";
import Map from "../components/chartComp/Map";

type Props = {};

const ChartsMaps = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-4 md:p-4 mt-12">
      <div className="col-span-12 ">
        <LineGraph />
      </div>
      <div className="col-span-12 h-96 mt-12">
        <Map />
      </div>
    </div>
  );
};

export default ChartsMaps;
