import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SortAscendingBoldIcon } from "../bold";
        import { SortAscendingDuotoneIcon } from "../duotone";
        import { SortAscendingFillIcon } from "../fill";
        import { SortAscendingLightIcon } from "../light";
        import { SortAscendingRegularIcon } from "../regular";
        import { SortAscendingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SortAscendingIcon = memo(function SortAscending(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SortAscendingBoldIcon,
            duotone: SortAscendingDuotoneIcon,
            fill: SortAscendingFillIcon,
            light: SortAscendingLightIcon,
            regular: SortAscendingRegularIcon,
            thin: SortAscendingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
