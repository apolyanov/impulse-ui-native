import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { YinYangBoldIcon } from "../bold";
        import { YinYangDuotoneIcon } from "../duotone";
        import { YinYangFillIcon } from "../fill";
        import { YinYangLightIcon } from "../light";
        import { YinYangRegularIcon } from "../regular";
        import { YinYangThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const YinYangIcon = memo(function YinYang(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: YinYangBoldIcon,
            duotone: YinYangDuotoneIcon,
            fill: YinYangFillIcon,
            light: YinYangLightIcon,
            regular: YinYangRegularIcon,
            thin: YinYangThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
