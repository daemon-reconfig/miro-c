import { Sidebar } from "./_components/sidebar";

interface DashboardLayoutProps {   
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60]px h-full">
                <div className="flex gap-x-3 h-full">
                    
                    <div className="h-full flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout;