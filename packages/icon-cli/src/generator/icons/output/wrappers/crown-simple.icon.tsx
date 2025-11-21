import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CrownSimpleBoldIcon } from "../bold";
        import { CrownSimpleDuotoneIcon } from "../duotone";
        import { CrownSimpleFillIcon } from "../fill";
        import { CrownSimpleLightIcon } from "../light";
        import { CrownSimpleRegularIcon } from "../regular";
        import { CrownSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CrownSimpleIcon = memo(function CrownSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CrownSimpleBoldIcon,
            duotone: CrownSimpleDuotoneIcon,
            fill: CrownSimpleFillIcon,
            light: CrownSimpleLightIcon,
            regular: CrownSimpleRegularIcon,
            thin: CrownSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
