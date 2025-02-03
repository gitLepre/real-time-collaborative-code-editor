import { ErrorBoundary, FallbackComponent } from '@shared/routes';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary FallbackComponent={FallbackComponent}>{children}</ErrorBoundary>;
};
