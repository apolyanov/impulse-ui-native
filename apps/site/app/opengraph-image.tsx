import { createSocialCard, socialImageSize } from "@/lib/social-card";

export const alt =
  "ImpulseUI Native — an open-source, token-driven React Native UI system";
export const contentType = "image/png";
export const size = socialImageSize;

export default function OpenGraphImage() {
  return createSocialCard();
}
