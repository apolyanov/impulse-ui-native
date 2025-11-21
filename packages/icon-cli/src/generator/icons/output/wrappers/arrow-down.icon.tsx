import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowDownBoldIcon } from "../bold";
        import { ArrowDownDuotoneIcon } from "../duotone";
        import { ArrowDownFillIcon } from "../fill";
        import { ArrowDownLightIcon } from "../light";
        import { ArrowDownRegularIcon } from "../regular";
        import { ArrowDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowDownIcon = memo(function ArrowDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowDownBoldIcon,
            duotone: ArrowDownDuotoneIcon,
            fill: ArrowDownFillIcon,
            light: ArrowDownLightIcon,
            regular: ArrowDownRegularIcon,
            thin: ArrowDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
