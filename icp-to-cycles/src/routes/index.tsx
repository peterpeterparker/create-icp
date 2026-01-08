import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/login-form"
import { AppSidebar } from "@/components/core/app-sidebar.tsx"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {ThemeToggle} from "@/components/core/theme-toggle.tsx";

export const Route = createFileRoute('/')({
  component: App,
})

/**
 *
 *       <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
 *         <div className="w-full max-w-sm">
 *             <LoginForm />
 *         </div>
 *       </div>
 * @constructor
 */

function App() {
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />

                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />

                <ThemeToggle />
            </header>
            <div className="flex flex-1 flex-col">
                <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-sm">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </SidebarInset>
    </SidebarProvider>
  )
}
