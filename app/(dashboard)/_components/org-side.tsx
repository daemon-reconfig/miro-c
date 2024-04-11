"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";


const font = Poppins({ subsets: ["latin"], weight:["600"] });
export const OrgSideBar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");
    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-12 pt-5 items-center ">
            <Link href="/">
                <div className="flex items-center gap-x-2">
                    <Image 
                    src="/logoipsum-245.svg"
                    alt="logo"
                    width={30}
                    height={30}
                    />
                    <span className={cn(
                        "font-semibold text-2xl ",
                        font.className
                    )}>
                        Miro-C
                    </span>
                </div>
            </Link>
            <div className="flex flex-col items-center pl-5 w-full">
                <OrganizationSwitcher 
                    hidePersonal
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            },
                            organizationSwitcherTrigger: {
                                padding: "6px",
                                width: "100%",
                                borderRadius: "8px",
                                border: "1px solid #E5E7EB",
                                justifyContent: "space-between",
                                backgroundColor: "#F9FAFB",
                            }
                        }
                    }}
                />

            </div>
            <div className="space-y-1 w-full flex flex-col items-center pl-5">
                <Button
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full "
                    variant={favorites ? "ghost" : "outline"}
                >
                    <Link href="/">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team Boards
                    </Link>
                </Button>
                <Button
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full "
                    variant={favorites ? "outline" : "ghost"}
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: true }
                    
                    }}>
                        <Star className="h-4 w-4 mr-2" />
                        Favorite Boards
                    </Link>
                </Button>
            </div>
        </div>
    );
}