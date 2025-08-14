import { useState } from 'react';
import {
  Plus,
  Trash2,
  Edit,
  Save,
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  BellIcon,
} from 'lucide-react';
import Avatar, { AvatarFallback, AvatarImage } from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function FormButtons() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleLoadingDemo = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <>
      {/* Buttons Section */}
      <Card className="p-4">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Buttons</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Variants */}
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon only">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* States */}
          <div className="flex flex-wrap gap-3">
            <Button loading={buttonLoading} onClick={handleLoadingDemo}>
              {buttonLoading ? 'Loading...' : 'Click for Loading State'}
            </Button>
            <Button disabled>Disabled</Button>
            <Button disabled loading>
              Loading Disabled
            </Button>
          </div>

          {/* Icon Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<Plus className="w-4 h-4" />}>Add</Button>
            <Button leftIcon={<Edit className="w-4 h-4" />}>Edit</Button>
            <Button leftIcon={<Trash2 className="w-4 h-4" />} variant="destructive">
              Delete
            </Button>
            <Button rightIcon={<ArrowRight className="w-4 h-4" />}>Next</Button>
            <Button leftIcon={<ArrowLeft className="w-4 h-4" />}>Back</Button>
            <Button leftIcon={<Save className="w-4 h-4" />} variant="success">
              Save
            </Button>
            <Button leftIcon={<Download className="w-4 h-4" />}>Download</Button>
            <Button leftIcon={<Upload className="w-4 h-4" />}>Upload</Button>
          </div>

          {/* Full Width */}
          <div className="col-span-full">
            <Button className="w-full">Full Width Button</Button>
          </div>

          {/* Rounded */}
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full">Rounded Full</Button>
            <Button size="icon" className="rounded-full" aria-label="Rounded Icon">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="success" badgeContent={5}>
              Success Button
            </Button>

            <Button variant="warning" badgeVariant="dot" leftIcon={<BellIcon />}>
              Alert
            </Button>
          </div>
        </div>
      </Card>
      <br />
      {/* Badges & Avatars Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Badges */}
        <Card className="p-4">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Badges</h2>
          <div className="space-y-4">
            {/* Variants */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-2">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>
        </Card>

        {/* Avatars */}
        <Card className="p-4">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Avatars</h2>
          <div className="flex gap-6 p-4 flex-wrap">
            {/* Avatar with Image */}
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            {/* Avatar with Broken Image */}
            <Avatar>
              <AvatarImage src="https://invalid-url.com/avatar.png" alt="Broken Avatar" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>

            {/* Avatar with Only Fallback */}
            <Avatar>
              <AvatarFallback>XY</AvatarFallback>
            </Avatar>

            {/* Larger Avatar */}
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Large Avatar" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </Card>
      </div>
    </>
  );
}
