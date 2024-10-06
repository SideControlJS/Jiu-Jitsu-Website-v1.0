import React from "react";

const Map = () => (
    <div>
      <h2>Gym Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=<your-google-map-embed-link>"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Gym Location"
      ></iframe>
    </div>
  );
  
  export default Map;
  