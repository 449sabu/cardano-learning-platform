import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import type { User } from '@supabase/supabase-js';

function Sidebar() {
  return (
    <div className="bg-green-100 w-60 h-screen">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      Sidebar
    </div>
  );
}

export default Sidebar;
