import {ThemeProvider} from '@/components/providers/theme-provider.tsx';
import {Outlet, createRootRoute} from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Outlet />
      </ThemeProvider>
    </>
  )
});
