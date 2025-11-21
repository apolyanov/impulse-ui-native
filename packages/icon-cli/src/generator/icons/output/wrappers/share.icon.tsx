import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShareBoldIcon } from "../bold";
        import { ShareDuotoneIcon } from "../duotone";
        import { ShareFillIcon } from "../fill";
        import { ShareLightIcon } from "../light";
        import { ShareRegularIcon } from "../regular";
        import { ShareThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShareIcon = memo(function Share(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShareBoldIcon,
            duotone: ShareDuotoneIcon,
            fill: ShareFillIcon,
            light: ShareLightIcon,
            regular: ShareRegularIcon,
            thin: ShareThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
