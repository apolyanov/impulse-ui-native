import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudCheckBoldIcon } from "../bold";
        import { CloudCheckDuotoneIcon } from "../duotone";
        import { CloudCheckFillIcon } from "../fill";
        import { CloudCheckLightIcon } from "../light";
        import { CloudCheckRegularIcon } from "../regular";
        import { CloudCheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudCheckIcon = memo(function CloudCheck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudCheckBoldIcon,
            duotone: CloudCheckDuotoneIcon,
            fill: CloudCheckFillIcon,
            light: CloudCheckLightIcon,
            regular: CloudCheckRegularIcon,
            thin: CloudCheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
