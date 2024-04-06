import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset,
}: HintProps) => {
    return(

    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent 
            className="text-white bg-black/50 border-fuchsia-500 border-2 rounded-md p-2 w-[max-content]"
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            >
                <p className="font-semibold capitalize">
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    )
};