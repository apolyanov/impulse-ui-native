import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ProjectorScreenBold } from "../bold";
import { ProjectorScreenDuotone } from "../duotone";
import { ProjectorScreenFill } from "../fill";
import { ProjectorScreenLight } from "../light";
import { ProjectorScreenRegular } from "../regular";
import { ProjectorScreenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ProjectorScreen = memo(function ProjectorScreen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProjectorScreenBold,
      duotone: ProjectorScreenDuotone,
      fill: ProjectorScreenFill,
      light: ProjectorScreenLight,
      regular: ProjectorScreenRegular,
      thin: ProjectorScreenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
