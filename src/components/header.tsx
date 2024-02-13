import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/navigation';
import { ModeToggle } from '@/components/theme-togle';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="h-12 lg:h-16 min-w-screen grid grid-cols-2 px-4 max-w-screen-2xl m-auto">
        <div className="flex items-center gap-3">
          <div>App Logo</div>
          <Navigation />
        </div>
        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <Link href="/auth">
            <Button>ログイン</Button>
          </Link>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
