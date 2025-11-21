import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowFatLinesRightBoldIcon } from "../bold";
        import { ArrowFatLinesRightDuotoneIcon } from "../duotone";
        import { ArrowFatLinesRightFillIcon } from "../fill";
        import { ArrowFatLinesRightLightIcon } from "../light";
        import { ArrowFatLinesRightRegularIcon } from "../regular";
        import { ArrowFatLinesRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowFatLinesRightIcon = memo(function ArrowFatLinesRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowFatLinesRightBoldIcon,
            duotone: ArrowFatLinesRightDuotoneIcon,
            fill: ArrowFatLinesRightFillIcon,
            light: ArrowFatLinesRightLightIcon,
            regular: ArrowFatLinesRightRegularIcon,
            thin: ArrowFatLinesRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
