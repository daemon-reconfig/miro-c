import Image from "next/image"

export const EmptySearch = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/emptysearch.png"
            alt="Empty Search"
            height={200}
            width={200}
            />
            <h2 className='text-2xl font-semibold mt-6'>
            No records found
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Try Searching for something else
        </p>
        </div>
    )
}