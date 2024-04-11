import Image from "next/image"

export const EmptyFav = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/emptyfav.png"
            alt="Empty Search"
            height={200}
            width={200}
            />
            <h2 className='text-2xl font-semibold mt-6'>
            No Favourate Board
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Try Favourating a board
        </p>
        </div>
    )
}