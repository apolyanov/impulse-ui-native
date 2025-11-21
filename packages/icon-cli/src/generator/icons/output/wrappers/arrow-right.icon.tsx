import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowRightBoldIcon } from "../bold";
        import { ArrowRightDuotoneIcon } from "../duotone";
        import { ArrowRightFillIcon } from "../fill";
        import { ArrowRightLightIcon } from "../light";
        import { ArrowRightRegularIcon } from "../regular";
        import { ArrowRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowRightIcon = memo(function ArrowRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowRightBoldIcon,
            duotone: ArrowRightDuotoneIcon,
            fill: ArrowRightFillIcon,
            light: ArrowRightLightIcon,
            regular: ArrowRightRegularIcon,
            thin: ArrowRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
