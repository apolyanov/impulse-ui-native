import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProjectorScreenChartBoldIcon } from "../bold/projector-screen-chart-bold.icon";
import { ProjectorScreenChartDuotoneIcon } from "../duotone/projector-screen-chart-duotone.icon";
import { ProjectorScreenChartFillIcon } from "../fill/projector-screen-chart-fill.icon";
import { ProjectorScreenChartLightIcon } from "../light/projector-screen-chart-light.icon";
import { ProjectorScreenChartRegularIcon } from "../regular/projector-screen-chart-regular.icon";
import { ProjectorScreenChartThinIcon } from "../thin/projector-screen-chart-thin.icon";

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
