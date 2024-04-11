"use client";

import { EmptyBoard } from "./empty-boardds";
import { EmptyFav } from "./empty-fav";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
    
};

export const BoardList = ({ orgId, query }: BoardListProps) => {
    const data = [];
    if(!data?.length && query.search) {
        return(
            <div>
                <EmptySearch />
            </div>
        )
    }
    if(!data?.length && query.favorites) {
        return(
            <div>
                <EmptyFav />
            </div>
        )
    }
    if(!data?.length) {
        return(
            <div>
                <EmptyBoard />
            </div>
        )
    }
    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
}