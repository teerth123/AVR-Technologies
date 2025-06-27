import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
    SidebarInset,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { ThemeProvider } from "@/components/theme-provider"
  import { ModeToggle } from "@/components/mode-toggle"
  import Page from "./page"
  
  import { useUser, UserButton, useOrganization } from "@clerk/clerk-react"
  
  export default function Dashboard() {
    const { user, isLoaded: isUserLoaded } = useUser()
    const { organization, isLoaded: isOrgLoaded } = useOrganization()
  
    // Prevent rendering until Clerk is ready
    if (!isUserLoaded || !isOrgLoaded) return null
  
    return (
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div className="p-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {organization?.name || user?.firstName || "AVR Tech"}
                </h2>
                <div className="flex items-center gap-2">
                  <ModeToggle />
                  <UserButton afterSignOutUrl="/sign-in" />
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Analytics</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Documents</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <Page />
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    )
  }
  