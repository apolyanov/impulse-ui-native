import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CellSignalNoneBoldIcon } from "../bold";
        import { CellSignalNoneDuotoneIcon } from "../duotone";
        import { CellSignalNoneFillIcon } from "../fill";
        import { CellSignalNoneLightIcon } from "../light";
        import { CellSignalNoneRegularIcon } from "../regular";
        import { CellSignalNoneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CellSignalNoneIcon = memo(function CellSignalNone(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CellSignalNoneBoldIcon,
            duotone: CellSignalNoneDuotoneIcon,
            fill: CellSignalNoneFillIcon,
            light: CellSignalNoneLightIcon,
            regular: CellSignalNoneRegularIcon,
            thin: CellSignalNoneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
