import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vivek Binkam — Developer & Visual Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0c0e",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid #26282e",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#e8b86d",
            fontFamily: "monospace",
            marginBottom: 28,
          }}
        >
          CSE&apos;27 · DEVELOPER · VISUAL DESIGNER
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 128,
            lineHeight: 0.95,
            fontWeight: 700,
            color: "#ececee",
          }}
        >
          <span>VIVEK</span>
          <span style={{ color: "#8a8f98" }}>BINKAM</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#8a8f98",
            fontFamily: "monospace",
          }}
        >
          portfolio-two-lac-33.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}