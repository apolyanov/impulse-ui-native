import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitPullRequestBold } from "../bold";
import { GitPullRequestDuotone } from "../duotone";
import { GitPullRequestFill } from "../fill";
import { GitPullRequestLight } from "../light";
import { GitPullRequestRegular } from "../regular";
import { GitPullRequestThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitPullRequest = memo(function GitPullRequest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitPullRequestBold,
      duotone: GitPullRequestDuotone,
      fill: GitPullRequestFill,
      light: GitPullRequestLight,
      regular: GitPullRequestRegular,
      thin: GitPullRequestThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
