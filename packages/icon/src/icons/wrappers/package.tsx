import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PackageBold } from "../bold";
import { PackageDuotone } from "../duotone";
import { PackageFill } from "../fill";
import { PackageLight } from "../light";
import { PackageRegular } from "../regular";
import { PackageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Package = memo(function Package(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PackageBold,
      duotone: PackageDuotone,
      fill: PackageFill,
      light: PackageLight,
      regular: PackageRegular,
      thin: PackageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
