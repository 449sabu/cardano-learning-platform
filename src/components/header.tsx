import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/navigation';
const Header = () => {
  return (
    <header>
      <div className="h-12 lg:h-16 min-w-screen grid grid-cols-2 px-4">
        <div className="flex items-center gap-3">
          <div>App Logo</div>
          <Navigation />
        </div>
        <div className="flex items-center justify-end">
          <Button>Sign in</Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
