import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MemoryBoldIcon } from "../bold";
        import { MemoryDuotoneIcon } from "../duotone";
        import { MemoryFillIcon } from "../fill";
        import { MemoryLightIcon } from "../light";
        import { MemoryRegularIcon } from "../regular";
        import { MemoryThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MemoryIcon = memo(function Memory(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MemoryBoldIcon,
            duotone: MemoryDuotoneIcon,
            fill: MemoryFillIcon,
            light: MemoryLightIcon,
            regular: MemoryRegularIcon,
            thin: MemoryThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
