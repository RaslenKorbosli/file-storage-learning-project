import { Button } from '@/components/ui/button';
import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
} from '@clerk/nextjs';

export default function Header() {
  return (
    <div className=" border-b p-4 bg-gray-50">
      <div className="container flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">FileStorage</h1>
        <div className="flex gap-4">
          {' '}
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
