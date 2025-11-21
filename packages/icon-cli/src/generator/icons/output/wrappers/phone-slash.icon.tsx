import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhoneSlashBoldIcon } from "../bold";
        import { PhoneSlashDuotoneIcon } from "../duotone";
        import { PhoneSlashFillIcon } from "../fill";
        import { PhoneSlashLightIcon } from "../light";
        import { PhoneSlashRegularIcon } from "../regular";
        import { PhoneSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhoneSlashIcon = memo(function PhoneSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhoneSlashBoldIcon,
            duotone: PhoneSlashDuotoneIcon,
            fill: PhoneSlashFillIcon,
            light: PhoneSlashLightIcon,
            regular: PhoneSlashRegularIcon,
            thin: PhoneSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
