import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TentBoldIcon } from "../bold";
        import { TentDuotoneIcon } from "../duotone";
        import { TentFillIcon } from "../fill";
        import { TentLightIcon } from "../light";
        import { TentRegularIcon } from "../regular";
        import { TentThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TentIcon = memo(function Tent(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TentBoldIcon,
            duotone: TentDuotoneIcon,
            fill: TentFillIcon,
            light: TentLightIcon,
            regular: TentRegularIcon,
            thin: TentThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
