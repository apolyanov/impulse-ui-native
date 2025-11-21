import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PackageBoldIcon } from "../bold";
import { PackageDuotoneIcon } from "../duotone";
import { PackageFillIcon } from "../fill";
import { PackageLightIcon } from "../light";
import { PackageRegularIcon } from "../regular";
import { PackageThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PackageIcon = memo(function Package(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PackageBoldIcon,
      duotone: PackageDuotoneIcon,
      fill: PackageFillIcon,
      light: PackageLightIcon,
      regular: PackageRegularIcon,
      thin: PackageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
