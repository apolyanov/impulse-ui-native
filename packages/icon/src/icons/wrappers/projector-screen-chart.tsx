import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ProjectorScreenChartBold } from "../bold";
import { ProjectorScreenChartDuotone } from "../duotone";
import { ProjectorScreenChartFill } from "../fill";
import { ProjectorScreenChartLight } from "../light";
import { ProjectorScreenChartRegular } from "../regular";
import { ProjectorScreenChartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ProjectorScreenChart = memo(function ProjectorScreenChart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProjectorScreenChartBold,
      duotone: ProjectorScreenChartDuotone,
      fill: ProjectorScreenChartFill,
      light: ProjectorScreenChartLight,
      regular: ProjectorScreenChartRegular,
      thin: ProjectorScreenChartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
