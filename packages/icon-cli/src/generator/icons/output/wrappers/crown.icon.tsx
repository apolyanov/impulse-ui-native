import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CrownBoldIcon } from "../bold";
        import { CrownDuotoneIcon } from "../duotone";
        import { CrownFillIcon } from "../fill";
        import { CrownLightIcon } from "../light";
        import { CrownRegularIcon } from "../regular";
        import { CrownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CrownIcon = memo(function Crown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CrownBoldIcon,
            duotone: CrownDuotoneIcon,
            fill: CrownFillIcon,
            light: CrownLightIcon,
            regular: CrownRegularIcon,
            thin: CrownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
