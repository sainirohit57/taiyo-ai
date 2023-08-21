import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Spinner } from "flowbite-react";
import fetchMapData from "../fetcher/MapData";

type Props = {};

const Map = (props: Props) => {
  const { isError, isLoading, data } = useQuery(["mapData"], fetchMapData);

  if (isLoading) {
    return (
      <Spinner
        aria-label="Loading"
        className="w-full h-20 flex justify-center"
      />
    );
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="h-96">
      <MapContainer
        className="h-full w-full z-10"
        center={[33, 65]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((country: any, index: any) => (
          <Marker
            key={index}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <p>Country: {country.country}</p>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
