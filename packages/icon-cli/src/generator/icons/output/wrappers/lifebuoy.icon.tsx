import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LifebuoyBoldIcon } from "../bold";
        import { LifebuoyDuotoneIcon } from "../duotone";
        import { LifebuoyFillIcon } from "../fill";
        import { LifebuoyLightIcon } from "../light";
        import { LifebuoyRegularIcon } from "../regular";
        import { LifebuoyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LifebuoyIcon = memo(function Lifebuoy(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LifebuoyBoldIcon,
            duotone: LifebuoyDuotoneIcon,
            fill: LifebuoyFillIcon,
            light: LifebuoyLightIcon,
            regular: LifebuoyRegularIcon,
            thin: LifebuoyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
