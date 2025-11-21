import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GoogleDriveLogoBoldIcon } from "../bold";
        import { GoogleDriveLogoDuotoneIcon } from "../duotone";
        import { GoogleDriveLogoFillIcon } from "../fill";
        import { GoogleDriveLogoLightIcon } from "../light";
        import { GoogleDriveLogoRegularIcon } from "../regular";
        import { GoogleDriveLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GoogleDriveLogoIcon = memo(function GoogleDriveLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GoogleDriveLogoBoldIcon,
            duotone: GoogleDriveLogoDuotoneIcon,
            fill: GoogleDriveLogoFillIcon,
            light: GoogleDriveLogoLightIcon,
            regular: GoogleDriveLogoRegularIcon,
            thin: GoogleDriveLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
