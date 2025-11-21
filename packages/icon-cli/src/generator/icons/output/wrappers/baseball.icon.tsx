import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BaseballBoldIcon } from "../bold";
        import { BaseballDuotoneIcon } from "../duotone";
        import { BaseballFillIcon } from "../fill";
        import { BaseballLightIcon } from "../light";
        import { BaseballRegularIcon } from "../regular";
        import { BaseballThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BaseballIcon = memo(function Baseball(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BaseballBoldIcon,
            duotone: BaseballDuotoneIcon,
            fill: BaseballFillIcon,
            light: BaseballLightIcon,
            regular: BaseballRegularIcon,
            thin: BaseballThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
