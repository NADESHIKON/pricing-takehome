import { useRank } from './hook';

export type AccessibilityType = {
    minimumRank: number,
    children: JSX.Element,
    denialElement?: JSX.Element
}

export default function Accessible({ minimumRank, denialElement = undefined, children }: AccessibilityType) {
    const currentRank = useRank();

    if (currentRank < minimumRank) {
        if (denialElement) return denialElement;

        return null;
    }

    return children;
}