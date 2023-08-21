import axios from "axios";

type Props = {};

const fetchLineGraphData = async (props: Props) => {
  // Graph data for cases with date
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  const data = response.data;
  return data;
};

export default fetchLineGraphData;
