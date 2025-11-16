import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitMergeBold } from "../bold";
import { GitMergeDuotone } from "../duotone";
import { GitMergeFill } from "../fill";
import { GitMergeLight } from "../light";
import { GitMergeRegular } from "../regular";
import { GitMergeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitMerge = memo(function GitMerge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitMergeBold,
      duotone: GitMergeDuotone,
      fill: GitMergeFill,
      light: GitMergeLight,
      regular: GitMergeRegular,
      thin: GitMergeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
