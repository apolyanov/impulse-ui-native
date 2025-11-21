import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { JeepBoldIcon } from "../bold";
        import { JeepDuotoneIcon } from "../duotone";
        import { JeepFillIcon } from "../fill";
        import { JeepLightIcon } from "../light";
        import { JeepRegularIcon } from "../regular";
        import { JeepThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const JeepIcon = memo(function Jeep(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: JeepBoldIcon,
            duotone: JeepDuotoneIcon,
            fill: JeepFillIcon,
            light: JeepLightIcon,
            regular: JeepRegularIcon,
            thin: JeepThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
