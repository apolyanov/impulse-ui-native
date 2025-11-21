import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChurchBoldIcon } from "../bold";
        import { ChurchDuotoneIcon } from "../duotone";
        import { ChurchFillIcon } from "../fill";
        import { ChurchLightIcon } from "../light";
        import { ChurchRegularIcon } from "../regular";
        import { ChurchThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChurchIcon = memo(function Church(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChurchBoldIcon,
            duotone: ChurchDuotoneIcon,
            fill: ChurchFillIcon,
            light: ChurchLightIcon,
            regular: ChurchRegularIcon,
            thin: ChurchThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
