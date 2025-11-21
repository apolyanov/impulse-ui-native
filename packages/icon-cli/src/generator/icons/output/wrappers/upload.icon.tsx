import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UploadBoldIcon } from "../bold";
        import { UploadDuotoneIcon } from "../duotone";
        import { UploadFillIcon } from "../fill";
        import { UploadLightIcon } from "../light";
        import { UploadRegularIcon } from "../regular";
        import { UploadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UploadIcon = memo(function Upload(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UploadBoldIcon,
            duotone: UploadDuotoneIcon,
            fill: UploadFillIcon,
            light: UploadLightIcon,
            regular: UploadRegularIcon,
            thin: UploadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
