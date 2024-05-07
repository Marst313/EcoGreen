import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import RecenterMap from "../components/RecenterMap";

const Map = () => {
  const [geolocation, setGeolocation] = useState(null);
  const markerRef = useRef(null);

  const eventHandler = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker) {
          const position = marker.getLatLng();
          setGeolocation(position);
        }
      },
    }),
    [],
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setGeolocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Your Device is not available geolocation");
    }
  }, []);

  if (!geolocation) {
    return (
      <div>
        <h1>Oops! Ada Sesuatu Yang Salah....</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-28 max-w-screen-xl">
      <div className="mt-5 flex justify-center">
        <h1 className="text-[40px] font-extrabold text-[#729975]">Peta</h1>
      </div>
      <div className="my-5 flex justify-center">
        <div
          style={{
            height: "100vh",
            width: "90vw",
          }}
        >
          <MapContainer
            center={geolocation}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              ref={markerRef}
              position={geolocation}
              draggable={true}
              eventHandlers={eventHandler}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <RecenterMap location={geolocation} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
