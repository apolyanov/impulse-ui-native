import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FloppyDiskBoldIcon } from "../bold";
        import { FloppyDiskDuotoneIcon } from "../duotone";
        import { FloppyDiskFillIcon } from "../fill";
        import { FloppyDiskLightIcon } from "../light";
        import { FloppyDiskRegularIcon } from "../regular";
        import { FloppyDiskThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FloppyDiskIcon = memo(function FloppyDisk(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FloppyDiskBoldIcon,
            duotone: FloppyDiskDuotoneIcon,
            fill: FloppyDiskFillIcon,
            light: FloppyDiskLightIcon,
            regular: FloppyDiskRegularIcon,
            thin: FloppyDiskThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
