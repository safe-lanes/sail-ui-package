import { useState } from 'react';
import { Mail, Search, Settings } from 'lucide-react';
import Button from './components/Button';
import Input from './components/Input';
import Avatar, { AvatarFallback, AvatarImage } from './components/Avatar';
import Card from './components/Card';
import Badge from './components/Badge';
import Dialog, { DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger, DialogHeader } from './components/Dialog';
import Spinner from './components/Spinner';
import { DialogClose } from '@radix-ui/react-dialog';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleLoadingDemo = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">UI Component Library</h1>
          <p className="text-xl text-slate-600">A collection of beautiful, reusable React components</p>
        </div>

        {/* Buttons Section */}
        <Card className='p-4'>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button loading={buttonLoading} onClick={handleLoadingDemo}>
                {buttonLoading ? 'Loading...' : 'Click for Loading State'}
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Card>

        {/* Inputs Section */}
        <Card className='p-4'>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Inputs</h2>
          <div className="space-y-4 max-w-md">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              leftIcon={<Mail className="w-5 h-5" />}
            />
            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<Search className="w-5 h-5" />}
              helperText="Type to search through items"
            />
            <Input
              label="Settings"
              placeholder="Configure settings"
              rightIcon={<Settings className="w-5 h-5" />}
            />
            <Input
              label="Error Example"
              placeholder="This field has an error"
              error="This field is required"
            />
          </div>
        </Card>

        {/* Badges & Avatars Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className='p-4'>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Badges</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Success</Badge>
                <Badge variant="outline">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
              </div>
            </div>
          </Card>

          <Card className='p-4'>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Avatars</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-4 p-6">
                  {/* Avatar with Image */}
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>

                  {/* Avatar with Broken Image (shows fallback) */}
                  <Avatar>
                    <AvatarImage src="https://invalid-url.com/avatar.png" alt="Broken Avatar" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>

                  {/* Avatar with Only Fallback */}
                  <Avatar>
                    <AvatarFallback>XY</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Spinners & Modal Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Spinners</h2>
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner color="secondary" />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Modal</h2>
            <div className="p-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Profile Update</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you’re done.
                    </DialogDescription>
                  </DialogHeader>

                  {/* Example Form Content */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="default">Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>

        {/* Cards Section */}
        <Card>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Card Variations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">Small Padding</h3>
              <p className="text-slate-600">This card has small padding and hover effect.</p>
            </Card>
            <Card >
              <h3 className="font-semibold text-slate-900 mb-2">Medium Padding</h3>
              <p className="text-slate-600">This card has medium padding (default).</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">Large Padding</h3>
              <p className="text-slate-600">This card has large padding and hover effect.</p>
            </Card>
          </div>
        </Card>
      </div>


    </div>
  );
}

export default App;