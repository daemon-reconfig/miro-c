"use client";

import {  useQuery } from "convex/react";

import { EmptyBoard } from "./empty-boardds";
import { EmptyFav } from "./empty-fav";
import { EmptySearch } from "./empty-search";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
    
};

export const BoardList = ({ orgId, query }: BoardListProps) => {
    const data = useQuery(api.boards.get, { orgId });
    

    console.log(query);
    console.log(data);
    if(data === undefined) {
        return (<div>
            Loading...
        </div>);
    }
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
            <h2 className="text-3xl">
                {query.favorites ? "Favorites Boards" : "Team Boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4
            xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-8 pb-10">
                {data?.map((board)=> (
                    <BoardCard
                    key={board._id}
                    id={board._id}
                    title={board.title}
                    imageUrl={board.imageUrl}
                    authorName={board.authorName}
                    authorId={board.authorId}
                    createdAt={board._creationTime}
                    orgId={board.orgId}
                    isFavorite={false}
                    />
                ))}
            </div>
        </div>
    );
}