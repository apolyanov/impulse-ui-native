import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitForkBoldIcon } from "../bold/git-fork-bold.icon";
import { GitForkDuotoneIcon } from "../duotone/git-fork-duotone.icon";
import { GitForkFillIcon } from "../fill/git-fork-fill.icon";
import { GitForkLightIcon } from "../light/git-fork-light.icon";
import { GitForkRegularIcon } from "../regular/git-fork-regular.icon";
import { GitForkThinIcon } from "../thin/git-fork-thin.icon";

export const GitForkIcon = memo(function GitFork(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitForkBoldIcon,
      duotone: GitForkDuotoneIcon,
      fill: GitForkFillIcon,
      light: GitForkLightIcon,
      regular: GitForkRegularIcon,
      thin: GitForkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
