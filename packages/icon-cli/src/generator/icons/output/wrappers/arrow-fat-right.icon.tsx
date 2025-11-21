import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowFatRightBoldIcon } from "../bold";
        import { ArrowFatRightDuotoneIcon } from "../duotone";
        import { ArrowFatRightFillIcon } from "../fill";
        import { ArrowFatRightLightIcon } from "../light";
        import { ArrowFatRightRegularIcon } from "../regular";
        import { ArrowFatRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowFatRightIcon = memo(function ArrowFatRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowFatRightBoldIcon,
            duotone: ArrowFatRightDuotoneIcon,
            fill: ArrowFatRightFillIcon,
            light: ArrowFatRightLightIcon,
            regular: ArrowFatRightRegularIcon,
            thin: ArrowFatRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
