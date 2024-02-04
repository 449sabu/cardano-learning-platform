import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  navigationItems: {
    key: string;
    name: string;
  }[];
}

const Sidebar = ({ navigationItems }: SidebarProps) => {
  return (
    <div className="flex gap-3 min-h-screen">
      <div className="flex flex-col gap-2 py-4">
        {navigationItems.map((navigationItem) => (
          <Button
            key={navigationItem.key}
            variant="ghost"
            className="justify-start"
          >
            {navigationItem.name}
          </Button>
        ))}
      </div>
      <Separator orientation="vertical" />
    </div>
  );
};

export default Sidebar;
