import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { YarnBoldIcon } from "../bold";
        import { YarnDuotoneIcon } from "../duotone";
        import { YarnFillIcon } from "../fill";
        import { YarnLightIcon } from "../light";
        import { YarnRegularIcon } from "../regular";
        import { YarnThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const YarnIcon = memo(function Yarn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: YarnBoldIcon,
            duotone: YarnDuotoneIcon,
            fill: YarnFillIcon,
            light: YarnLightIcon,
            regular: YarnRegularIcon,
            thin: YarnThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
