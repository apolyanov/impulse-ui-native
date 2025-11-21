import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowUpRightBoldIcon } from "../bold";
        import { ArrowUpRightDuotoneIcon } from "../duotone";
        import { ArrowUpRightFillIcon } from "../fill";
        import { ArrowUpRightLightIcon } from "../light";
        import { ArrowUpRightRegularIcon } from "../regular";
        import { ArrowUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowUpRightIcon = memo(function ArrowUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowUpRightBoldIcon,
            duotone: ArrowUpRightDuotoneIcon,
            fill: ArrowUpRightFillIcon,
            light: ArrowUpRightLightIcon,
            regular: ArrowUpRightRegularIcon,
            thin: ArrowUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
