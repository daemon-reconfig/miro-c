"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./items";

export const List = () => {
    const organizationList = useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    });


    if(!organizationList.userMemberships || !organizationList.userMemberships.data?.length) return null;
    
    return (
        <ul className="space-y-4">
            {organizationList.userMemberships.data?.map((membership) => (
                <Item 
                    key={membership.organization.id}
                    id={membership.organization.id}
                    name={membership.organization.name}
                    imageUrl={membership.organization.imageUrl}
                />
            ))}
        </ul>
    );
}