import { ImageResponse } from "next/og";

import { ImpulseUINativeLogoIcon } from "./icons";
import { seo } from "./seo";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialCard() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f1f3f5",
        color: "#16191d",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "center",
        overflow: "hidden",
        padding: "64px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#fee7e9",
          borderRadius: "999px",
          filter: "blur(40px)",
          height: "520px",
          position: "absolute",
          right: "-80px",
          top: "-180px",
          width: "520px",
        }}
      />
      <div
        style={{
          alignItems: "flex-start",
          background: "#ffffff",
          border: "1px solid #e9ecef",
          borderRadius: "32px",
          boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
          <div
            style={{
              alignItems: "center",
              background: "#f55d6b",
              borderRadius: "20px",
              display: "flex",
              height: "84px",
              justifyContent: "center",
              width: "84px",
            }}
          >
            <ImpulseUINativeLogoIcon fill="#ffffff" height={58} width={58} />
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 800 }}>
            ImpulseUI&nbsp;<span style={{ color: "#f55d6b" }}>Native</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "68px",
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Open-source UI for native momentum.
          </div>
          <div
            style={{
              color: "#495057",
              display: "flex",
              fontSize: "27px",
              lineHeight: 1.35,
              maxWidth: "900px",
            }}
          >
            {seo.socialDescription}
          </div>
        </div>

        <div
          style={{
            color: "#f55d6b",
            display: "flex",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          React Native · TypeScript · Design tokens · MIT
        </div>
      </div>
    </div>,
    socialImageSize,
  );
}
