import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SkipBackBoldIcon } from "../bold";
        import { SkipBackDuotoneIcon } from "../duotone";
        import { SkipBackFillIcon } from "../fill";
        import { SkipBackLightIcon } from "../light";
        import { SkipBackRegularIcon } from "../regular";
        import { SkipBackThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SkipBackIcon = memo(function SkipBack(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SkipBackBoldIcon,
            duotone: SkipBackDuotoneIcon,
            fill: SkipBackFillIcon,
            light: SkipBackLightIcon,
            regular: SkipBackRegularIcon,
            thin: SkipBackThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
