export interface SkeletonBoneTokens {
  backgroundColor: string;
  borderColor: string;
  initialOpacity: number;
  animatedOpacity: number;
  animationDuration: number;
}

export interface SkeletonTextTokens {
  alignSelf:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
  opacity: number;
}

export interface SkeletonTokens {
  bone: SkeletonBoneTokens;
  text: SkeletonTextTokens;
}
