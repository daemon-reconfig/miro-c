"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {api} from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoard = () => {
    const {organization} = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create);
    
    const onClick = () => {
        if(!organization) return; 
        mutate({
            orgId: organization.id,
            title: "Untitled Board", 
        })
        .then((id) => {
            toast.success("Board created successfully");
        })
        .catch(() => {
            toast.error("Failed to create board");
        });
    }
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/note.png"
            alt="Empty Boards"
            height={200}
            width={200}
            />
            <h2 className='text-2xl font-semibold mt-6'>
            No records found
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Start by creating a board for your organization
        </p>
        <div className="mt-6">
            <Button disabled={pending} size="lg" onClick={onClick}>
                Create Board
            </Button>
        </div>
        </div>
    )
}