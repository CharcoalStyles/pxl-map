"use client";

import * as React from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapRef } from "react-map-gl/maplibre";
import GlslCanvas from "glslCanvas";

// const programs = [
//   {
//     id: "sample-multicolor",
//     vertex: `#version 300 es

//       precision highp float;
//       layout (location=0) in vec4 position;
//       layout (location=1) in vec3 color;
      
//       out vec3 vColor;

//       void main() {
//           vColor = color;
//           gl_Position = position;
//       }
//     `,
//     fragment: `#version 300 es

//       precision highp float;
//       in vec3 vColor;
//       out vec4 fragColor;

//       void main() {
//           fragColor = vec4(vColor, 1.0);
//       }
//     `,
//   },
// ];

export default function Home() {
  // const glContext = React.useRef<WebGL2RenderingContext | null>(null);
  const [sandbox, setSandbox] = React.useState();
  const mapRef = React.useRef<MapRef | null>(null);

  const onMapLoad = React.useCallback(() => {
    console.log("onMapLoad", mapRef.current);
    if (mapRef.current) {
      const canvas = mapRef.current.getCanvas();
      var sandbox = new GlslCanvas(canvas);
    }
  }, []);

  return (
    <>
      <Map
        ref={(ref: MapRef) => {
          mapRef.current = ref;
        }}
        onLoad={onMapLoad}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 400, height: 400 }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env["NEXT_PUBLIC_MAPTILER_API_KEY"]}`}
        gl={glContext.current}
      />
    </>
  );
}
