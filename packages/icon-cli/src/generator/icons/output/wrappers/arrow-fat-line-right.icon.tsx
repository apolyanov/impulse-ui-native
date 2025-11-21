import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowFatLineRightBoldIcon } from "../bold";
        import { ArrowFatLineRightDuotoneIcon } from "../duotone";
        import { ArrowFatLineRightFillIcon } from "../fill";
        import { ArrowFatLineRightLightIcon } from "../light";
        import { ArrowFatLineRightRegularIcon } from "../regular";
        import { ArrowFatLineRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowFatLineRightIcon = memo(function ArrowFatLineRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowFatLineRightBoldIcon,
            duotone: ArrowFatLineRightDuotoneIcon,
            fill: ArrowFatLineRightFillIcon,
            light: ArrowFatLineRightLightIcon,
            regular: ArrowFatLineRightRegularIcon,
            thin: ArrowFatLineRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
