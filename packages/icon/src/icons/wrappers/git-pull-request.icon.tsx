import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitPullRequestBoldIcon } from "../bold/git-pull-request-bold.icon";
import { GitPullRequestDuotoneIcon } from "../duotone/git-pull-request-duotone.icon";
import { GitPullRequestFillIcon } from "../fill/git-pull-request-fill.icon";
import { GitPullRequestLightIcon } from "../light/git-pull-request-light.icon";
import { GitPullRequestRegularIcon } from "../regular/git-pull-request-regular.icon";
import { GitPullRequestThinIcon } from "../thin/git-pull-request-thin.icon";

export const GitPullRequestIcon = memo(function GitPullRequest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitPullRequestBoldIcon,
      duotone: GitPullRequestDuotoneIcon,
      fill: GitPullRequestFillIcon,
      light: GitPullRequestLightIcon,
      regular: GitPullRequestRegularIcon,
      thin: GitPullRequestThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
