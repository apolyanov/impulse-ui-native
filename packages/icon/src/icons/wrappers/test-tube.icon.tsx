import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TestTubeBoldIcon } from "../bold/test-tube-bold.icon";
import { TestTubeDuotoneIcon } from "../duotone/test-tube-duotone.icon";
import { TestTubeFillIcon } from "../fill/test-tube-fill.icon";
import { TestTubeLightIcon } from "../light/test-tube-light.icon";
import { TestTubeRegularIcon } from "../regular/test-tube-regular.icon";
import { TestTubeThinIcon } from "../thin/test-tube-thin.icon";

export const TestTubeIcon = memo(function TestTube(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TestTubeBoldIcon,
      duotone: TestTubeDuotoneIcon,
      fill: TestTubeFillIcon,
      light: TestTubeLightIcon,
      regular: TestTubeRegularIcon,
      thin: TestTubeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
