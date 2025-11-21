import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BrowserBoldIcon } from "../bold";
        import { BrowserDuotoneIcon } from "../duotone";
        import { BrowserFillIcon } from "../fill";
        import { BrowserLightIcon } from "../light";
        import { BrowserRegularIcon } from "../regular";
        import { BrowserThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BrowserIcon = memo(function Browser(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BrowserBoldIcon,
            duotone: BrowserDuotoneIcon,
            fill: BrowserFillIcon,
            light: BrowserLightIcon,
            regular: BrowserRegularIcon,
            thin: BrowserThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
