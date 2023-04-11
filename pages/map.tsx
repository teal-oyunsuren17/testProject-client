import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 47.920635, lng: 106.917431 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}></div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        onLoad={() => console.log("Map Component Loaded...")}
      />
    </div>
  );
};

export default Home;
