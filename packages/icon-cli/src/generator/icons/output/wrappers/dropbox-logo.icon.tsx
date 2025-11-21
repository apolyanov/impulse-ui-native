import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DropboxLogoBoldIcon } from "../bold";
        import { DropboxLogoDuotoneIcon } from "../duotone";
        import { DropboxLogoFillIcon } from "../fill";
        import { DropboxLogoLightIcon } from "../light";
        import { DropboxLogoRegularIcon } from "../regular";
        import { DropboxLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DropboxLogoIcon = memo(function DropboxLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DropboxLogoBoldIcon,
            duotone: DropboxLogoDuotoneIcon,
            fill: DropboxLogoFillIcon,
            light: DropboxLogoLightIcon,
            regular: DropboxLogoRegularIcon,
            thin: DropboxLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
