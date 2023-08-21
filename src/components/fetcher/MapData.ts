import axios from "axios";

type Props = {};

const fetchMapData = async (props: Props) => {
  // Country Specific data of cases
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  const mapData = response.data;
  return mapData;
};

export default fetchMapData;
