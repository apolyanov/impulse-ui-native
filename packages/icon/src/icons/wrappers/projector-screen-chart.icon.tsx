import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProjectorScreenChartBoldIcon } from "../bold";
import { ProjectorScreenChartDuotoneIcon } from "../duotone";
import { ProjectorScreenChartFillIcon } from "../fill";
import { ProjectorScreenChartLightIcon } from "../light";
import { ProjectorScreenChartRegularIcon } from "../regular";
import { ProjectorScreenChartThinIcon } from "../thin";

export const ProjectorScreenChartIcon = memo(function ProjectorScreenChart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProjectorScreenChartBoldIcon,
      duotone: ProjectorScreenChartDuotoneIcon,
      fill: ProjectorScreenChartFillIcon,
      light: ProjectorScreenChartLightIcon,
      regular: ProjectorScreenChartRegularIcon,
      thin: ProjectorScreenChartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
