import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowUUpRightBoldIcon } from "../bold";
        import { ArrowUUpRightDuotoneIcon } from "../duotone";
        import { ArrowUUpRightFillIcon } from "../fill";
        import { ArrowUUpRightLightIcon } from "../light";
        import { ArrowUUpRightRegularIcon } from "../regular";
        import { ArrowUUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowUUpRightIcon = memo(function ArrowUUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowUUpRightBoldIcon,
            duotone: ArrowUUpRightDuotoneIcon,
            fill: ArrowUUpRightFillIcon,
            light: ArrowUUpRightLightIcon,
            regular: ArrowUUpRightRegularIcon,
            thin: ArrowUUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
