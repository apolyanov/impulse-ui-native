import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SortDescendingBoldIcon } from "../bold";
        import { SortDescendingDuotoneIcon } from "../duotone";
        import { SortDescendingFillIcon } from "../fill";
        import { SortDescendingLightIcon } from "../light";
        import { SortDescendingRegularIcon } from "../regular";
        import { SortDescendingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SortDescendingIcon = memo(function SortDescending(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SortDescendingBoldIcon,
            duotone: SortDescendingDuotoneIcon,
            fill: SortDescendingFillIcon,
            light: SortDescendingLightIcon,
            regular: SortDescendingRegularIcon,
            thin: SortDescendingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
