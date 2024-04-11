"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMutation } from "convex/react";
import {api} from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs";


export const EmptyBoard = () => {
    const {organization} = useOrganization();
    const create = useMutation(api.board.create);
    const onClick = () => {
        if(!organization) return; 
        create({
            orgId: organization.id,
            title: "Untitled Board", 
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
            <Button size="lg" onClick={onClick}>
                Create Board
            </Button>
        </div>
        </div>
    )
}