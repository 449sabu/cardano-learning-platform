import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'Cardano Learning Platform User Dashboard',
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-6xl m-auto">{children}</div>;
};

export default DashboardLayout;
