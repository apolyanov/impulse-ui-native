import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TestTubeBold } from "../bold";
import { TestTubeDuotone } from "../duotone";
import { TestTubeFill } from "../fill";
import { TestTubeLight } from "../light";
import { TestTubeRegular } from "../regular";
import { TestTubeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TestTube = memo(function TestTube(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TestTubeBold,
      duotone: TestTubeDuotone,
      fill: TestTubeFill,
      light: TestTubeLight,
      regular: TestTubeRegular,
      thin: TestTubeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
