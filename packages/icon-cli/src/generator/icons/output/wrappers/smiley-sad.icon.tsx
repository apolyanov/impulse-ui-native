import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SmileySadBoldIcon } from "../bold";
        import { SmileySadDuotoneIcon } from "../duotone";
        import { SmileySadFillIcon } from "../fill";
        import { SmileySadLightIcon } from "../light";
        import { SmileySadRegularIcon } from "../regular";
        import { SmileySadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SmileySadIcon = memo(function SmileySad(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SmileySadBoldIcon,
            duotone: SmileySadDuotoneIcon,
            fill: SmileySadFillIcon,
            light: SmileySadLightIcon,
            regular: SmileySadRegularIcon,
            thin: SmileySadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
