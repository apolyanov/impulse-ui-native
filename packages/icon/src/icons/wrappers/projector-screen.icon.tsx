import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProjectorScreenBoldIcon } from "../bold/projector-screen-bold.icon";
import { ProjectorScreenDuotoneIcon } from "../duotone/projector-screen-duotone.icon";
import { ProjectorScreenFillIcon } from "../fill/projector-screen-fill.icon";
import { ProjectorScreenLightIcon } from "../light/projector-screen-light.icon";
import { ProjectorScreenRegularIcon } from "../regular/projector-screen-regular.icon";
import { ProjectorScreenThinIcon } from "../thin/projector-screen-thin.icon";

export const ProjectorScreenIcon = memo(function ProjectorScreen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProjectorScreenBoldIcon,
      duotone: ProjectorScreenDuotoneIcon,
      fill: ProjectorScreenFillIcon,
      light: ProjectorScreenLightIcon,
      regular: ProjectorScreenRegularIcon,
      thin: ProjectorScreenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
