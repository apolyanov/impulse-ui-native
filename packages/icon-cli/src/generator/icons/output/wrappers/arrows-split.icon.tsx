import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsSplitBoldIcon } from "../bold";
        import { ArrowsSplitDuotoneIcon } from "../duotone";
        import { ArrowsSplitFillIcon } from "../fill";
        import { ArrowsSplitLightIcon } from "../light";
        import { ArrowsSplitRegularIcon } from "../regular";
        import { ArrowsSplitThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsSplitIcon = memo(function ArrowsSplit(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsSplitBoldIcon,
            duotone: ArrowsSplitDuotoneIcon,
            fill: ArrowsSplitFillIcon,
            light: ArrowsSplitLightIcon,
            regular: ArrowsSplitRegularIcon,
            thin: ArrowsSplitThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
