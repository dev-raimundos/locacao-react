import { AppContent } from '@/components/starter-kit/app-content';
import { AppShell } from '@/components/starter-kit/app-shell';
import { AppSidebar } from '@/components/starter-kit/app-sidebar';
import { AppSidebarHeader } from '@/components/starter-kit/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
