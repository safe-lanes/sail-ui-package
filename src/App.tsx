import { useEffect, useState } from 'react';
import { Mail, Search, Settings } from 'lucide-react';
import Button from './components/Button';
import Input from './components/Input';
import Avatar, { AvatarFallback, AvatarImage } from './components/Avatar';
import Card from './components/Card';
import Badge from './components/Badge';
import Dialog, { DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger, DialogHeader } from './components/Dialog';
import Spinner from './components/Spinner';
import { DialogClose } from '@radix-ui/react-dialog';
import AlertDialog, {
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './components/Alert-dialog';
import { Alert, AlertTitle, AlertDescription } from './components/Alert';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './components/Breadcrumb';
import { Calendar } from './components/Calendar';
import { AspectRatio } from './components/Aspect-ratio';
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/Carousel';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "./components/Chart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {Checkbox} from './components/Checkbox/Checkbox';
import Collapsible, {
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/Collapsible";
import Command, {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./components/Command";
import React from 'react';
import ContextMenu, {
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "./components/Context-menu";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "./components/Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/Dropdown-menu";
import Label from './components/Label';
import { useForm } from "react-hook-form";
import Form, {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./components/Form";
import {
  FormPopup,
  FormPopupOverlay,
  FormPopupContent,
} from "./components/Form-popup";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./components/Hover-card";
import { InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './components/Input-otp';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from './components/Menubar';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./components/Navigation-menu";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "./components/Pagination";
import { Popover, PopoverTrigger, PopoverContent } from "./components/Popover";
import { Progress } from './components/Progress';
import { RadioGroup, RadioGroupItem } from './components/Radio-group';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/Resizable';
import { ScrollArea, ScrollBar } from './components/Scroll-area';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './components/Select';
import { Separator } from './components/Separator';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./components/Sheet/Sheet";
import { Skeleton } from './components/Skeleton';
import { Slider } from './components/Slider/Slider';
import { Switch } from './components/Switch';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './components/Table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs';
import { Textarea } from './components/Textarea';
import { Toggle, toggleVariants } from "./components/Toggle";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "./components/Toast";
import { ToggleGroup, ToggleGroupItem } from './components/Toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/Tooltip';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarSeparator,
} from "./components/Sidebar";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleLoadingDemo = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  const chartConfig = {
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-1))",
    },
    profit: {
      label: "Profit",
      color: "hsl(var(--chart-2))",
    },
  };

  // Sample data
  const data = [
    { month: "Jan", sales: 400, profit: 240 },
    { month: "Feb", sales: 300, profit: 139 },
    { month: "Mar", sales: 500, profit: 280 },
    { month: "Apr", sales: 278, profit: 190 },
    { month: "May", sales: 189, profit: 120 },
  ];
  const [checked, setChecked] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);


  // Open the command dialog when user presses Cmd+K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const [selectedTheme, setSelectedTheme] = React.useState("light");
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showLineNumbers, setShowLineNumbers] = React.useState(false);

  const [name, setName] = React.useState("");
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: { email: string }) {
    alert(`Submitted email: ${values.email}`);
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted!");
    setOpen(false);
  }


  const [showLineNumbers1, setShowLineNumbers1] = useState(true);
  const [alignment, setAlignment] = useState("left");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [selected, setSelected] = useState('option1');

  const [selectedValue, setSelectedValue] = useState('');

  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const [value, setValue] = useState([50]);

  const [enabled, setEnabled] = useState(false);

  const [value1, setValue1] = useState('');

  const [open3, setOpen3] = useState(false);
  const [enabled1, setEnabled1] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">UI Component Library</h1>
          <p className="text-xl text-slate-600">A collection of beautiful, reusable React components</p>
        </div>

        {/* Breadcrumb Navigation */<h2 className="text-2xl font-semibold text-slate-900 mb-6">Breadcrumb</h2>}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>UI Library</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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

        {/* Alert Dialog Section */}
        <Card>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Alert Dialog</h2>
          <div className="p-8">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Calendar</h2>
          <div className="p-4">
            <Calendar />
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Alerts</h2>
          <div className="space-y-4 p-4">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This is a default alert — you can use it for general messages.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </Card>
        <Card>
          <div className="p-6 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Aspect Ratio Examples</h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* 16:9 */}
                <div>
                  <p className="mb-2 font-medium">16:9</p>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                      alt="Scenic view"
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>

                {/* 4:3 */}
                <div>
                  <p className="mb-2 font-medium">4:3</p>
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                      alt="Cityscape"
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>

                {/* 1:1 */}
                <div>
                  <p className="mb-2 font-medium">1:1</p>
                  <AspectRatio ratio={1}>
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                      alt="Portrait"
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </section>
          </div>
        </Card>
        <div className="p-6 space-y-8">
          {/* Carousel Demo */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Carousel</h2>
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i}>
                    <div className="p-4">
                      <div className="flex h-48 items-center justify-center rounded-lg bg-slate-200 text-2xl font-bold text-slate-700">
                        Slide {i + 1}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Chart</h2>

          {/* Pass id + config to ChartStyle */}
          <ChartStyle id="sales-chart" config={chartConfig} />

          <ChartContainer
            id="sales-chart"
            config={chartConfig}
            className="w-full h-80 bg-white rounded-lg shadow-md p-4"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="var(--color-sales)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="var(--color-profit)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="p-6">
          <h2>Checkbox</h2>
          <label className="flex items-center space-x-2 cursor-pointer">
            <Checkbox
              checked={checked}
              onCheckedChange={(val) => setChecked(!!val)}
            />
            <span className="text-sm">
              I agree to the <a href="#" className="underline">terms & conditions</a>
            </span>
          </label>

          <p className="mt-4 text-sm text-gray-500">
            Checkbox is {checked ? "checked" : "not checked"}.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Collapsible Demo</h1>

          {/* Example Collapsible */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">Toggle Details</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 p-4 rounded-md border bg-sky-50 text-sky-800">
                This is some collapsible content. You can put anything here —
                text, images, or even forms.
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Another Example */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="default">Show More Info</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="mt-4 text-gray-700">
                Here’s another collapsible section. By default, it’s hidden until
                you click the button.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="p-10">
          <h1>Command</h1>
          <button
            onClick={() => setOpen(true)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Open Command Palette
          </button>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Suggestions">
                  <CommandItem onSelect={() => alert("📂 Open File")}>
                    Open File
                    <CommandShortcut>⌘O</CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => alert("💾 Save File")}>
                    Save File
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Navigation">
                  <CommandItem onSelect={() => alert("🏠 Go Home")}>
                    Home
                  </CommandItem>
                  <CommandItem onSelect={() => alert("⚙️ Settings")}>
                    Settings
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
        </div>

        <h1>ContextMenu</h1>
        <div className="">
          <ContextMenu>
            <ContextMenuTrigger className="px-6 py-4 bg-gray-200 rounded-lg cursor-context-menu hover:bg-gray-300">
              Right-click me
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>File Options</ContextMenuLabel>
              <ContextMenuItem onSelect={() => alert("📂 Open clicked")}>
                Open <ContextMenuShortcut>⌘O</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onSelect={() => alert("💾 Save clicked")}>
                Save <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show Line Numbers
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>Theme</ContextMenuLabel>
              <ContextMenuRadioGroup
                value={selectedTheme}
                onValueChange={setSelectedTheme}
              >
                <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Settings</ContextMenuItem>
                  <ContextMenuItem>Help</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        <h1>Drawer</h1>
        <div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="default">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent className="p-6">
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>
                  This is a description inside the drawer. You can put any content here.
                </DrawerDescription>
              </DrawerHeader>

              <div className="py-4 space-y-2">
                <p>Here’s some example content in the drawer body.</p>
                <input
                  type="text"
                  placeholder="Type something..."
                  className="w-full border rounded p-2"
                />
              </div>

              <DrawerFooter>
                <Button variant="default" onClick={() => alert("Saved!")}>
                  Save
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <h1>DropdownMenu</h1>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">Open Menu</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Checkbox items */}
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Show Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showLineNumbers}
                onCheckedChange={setShowLineNumbers}
              >
                Show Line Numbers
              </DropdownMenuCheckboxItem>

              <DropdownMenuSeparator />

              {/* Radio group */}
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={selectedTheme}
                onValueChange={setSelectedTheme}
              >
                <DropdownMenuRadioItem value="light">
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>

              <DropdownMenuSeparator />

              {/* Group with shortcut */}
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={() => alert("New File")}>
                  New File
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => alert("Open File")}>
                  Open File...
                  <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onSelect={() => alert("Option 1")}>
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => alert("Option 2")}>
                      Option 2
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h1>Label</h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Submitted: ${name}`);
            }}
            className="space-y-4 rounded-lg bg-white p-6 shadow"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sky-600">
                Your Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border-sky-400 focus:border-sky-500 focus:ring-sky-500"
              />
            </div>

            <Button
              type="submit"
              className="bg-sky-500 text-white hover:bg-sky-600"
            >
              Submit
            </Button>
          </form>
        </div>

        <h1>Form</h1>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 rounded-lg bg-white p-6 shadow"
            >
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sky-600">Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                        className="border-sky-400 focus:border-sky-500 focus:ring-sky-500"
                      />
                    </FormControl>
                    <FormDescription>
                      We’ll never share your email with anyone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-sky-500 text-white hover:bg-sky-600"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <h1>FormPopup:</h1>
        <div className="">
          <Button
            onClick={() => setOpen1(true)}
            className="bg-sky-500 text-white hover:bg-sky-600"
          >
            Open Form Popup
          </Button>

          <FormPopup open={open1} onOpenChange={setOpen1}>
            <FormPopupOverlay className="fixed inset-0 bg-black/50 z-40" />
            <FormPopupContent className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg z-50">

              <h2 className="mb-4 text-lg font-semibold">Sign Up</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sky-600">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-sky-400 focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sky-600">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-sky-400 focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen1(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-sky-500 text-white hover:bg-sky-600"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </FormPopupContent>
          </FormPopup>
        </div>

        <h1>Hover</h1>
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Hover me
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="p-4 bg-white rounded shadow-md max-w-xs">
              <p className="text-sm text-gray-700">
                This is the content inside the hover card. You can put any JSX here.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <h1>Menubar</h1>
        <div>
          <Menubar className="bg-white rounded-md shadow-md flex space-x-4 px-4 py-2">
            {/* File Menu */}
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onSelect={() => alert("New File")}>
                  New File <MenubarShortcut>Ctrl+N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem onSelect={() => alert("Open File")}>
                  Open File <MenubarShortcut>Ctrl+O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onSelect={() => alert("Save File")}>
                  Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Edit Menu */}
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={showLineNumbers1}
                  onCheckedChange={setShowLineNumbers1}
                >
                  Show Line Numbers
                </MenubarCheckboxItem>

                <MenubarSeparator />

                <MenubarSub>
                  <MenubarSubTrigger>Alignment</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup
                      value={alignment}
                      onValueChange={setAlignment}
                    >
                      <MenubarRadioItem value="left">Left</MenubarRadioItem>
                      <MenubarRadioItem value="center">Center</MenubarRadioItem>
                      <MenubarRadioItem value="right">Right</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            {/* Help Menu */}
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Resources</MenubarLabel>
                <MenubarItem
                  onSelect={() =>
                    window.open("https://docs.example.com", "_blank")
                  }
                >
                  Documentation
                </MenubarItem>
                <MenubarItem
                  onSelect={() =>
                    window.open("https://support.example.com", "_blank")
                  }
                >
                  Support
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* Display current states */}
          <div className="ml-8 p-4 border rounded bg-white shadow w-72">
            <h2 className="font-semibold mb-2">Settings Preview</h2>
            <p>
              <strong>Show Line Numbers:</strong>{" "}
              {showLineNumbers1 ? "Enabled" : "Disabled"}
            </p>
            <p>
              <strong>Alignment:</strong> {alignment}
            </p>
          </div>
        </div>

        <h1>Navigation menu</h1>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4 bg-white rounded-md shadow-md p-2">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Products with submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white rounded-md shadow-md w-64">
                  <ul>
                    <li>
                      <NavigationMenuLink href="#product-1" className="block p-2 hover:bg-gray-100 rounded">
                        Product 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#product-2" className="block p-2 hover:bg-gray-100 rounded">
                        Product 2
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#product-3" className="block p-2 hover:bg-gray-100 rounded">
                        Product 3
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Optional indicator */}
            <NavigationMenuIndicator />

            {/* Viewport for dropdown content */}
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        <h1>Pagination:</h1>
        <div>
          <Pagination className="my-10">
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            />
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === 1}
                  onClick={() => goToPage(1)}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              {currentPage > 4 && <PaginationEllipsis />}

              {[...Array(totalPages).keys()]
                .map((x) => x + 1)
                .filter((page) => page > 1 && page < totalPages)
                .filter(
                  (page) =>
                    page >= currentPage - 1 && page <= currentPage + 1
                )
                .map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              {currentPage < totalPages - 3 && <PaginationEllipsis />}

              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === totalPages}
                  onClick={() => goToPage(totalPages)}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
            <PaginationNext
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            />
          </Pagination>
        </div>

        <h1>Popover</h1>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4">
              <p>This is some content inside the popover.</p>
              <Button variant="secondary" className="mt-4">
                Action Button
              </Button>
            </PopoverContent>
          </Popover>
        </div>

        <h1>Progress:</h1>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Progress Demo</h2>
          <Progress value={progress} max={100} className="w-full" />
          <p className="mt-2 text-center">{progress}% completed</p>
        </div>

        <h1>Radiogroup</h1>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Choose an option:</h2>
          <RadioGroup value={selected} onValueChange={setSelected} className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="option1" />
              <span>Option 1</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="option2" />
              <span>Option 2</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="option3" />
              <span>Option 3</span>
            </label>
          </RadioGroup>

          <p className="mt-4">Selected: <strong>{selected}</strong></p>
        </div>
        <h1>Resizable:</h1>
        <div className="h-screen flex flex-col">
          <ResizablePanelGroup direction="horizontal" className="flex-1 flex">
            <ResizablePanel className="bg-blue-100 p-4">
              <h2 className="font-bold mb-2">Left Panel</h2>
              <p>This panel is resizable horizontally.</p>
            </ResizablePanel>
            <ResizableHandle className="w-2 bg-gray-300 cursor-col-resize" />
            <ResizablePanel className="bg-green-100 p-4 flex-1">
              <h2 className="font-bold mb-2">Right Panel</h2>
              <p>This panel expands/shrinks as you drag the handle.</p>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <h1>Scroll</h1>
        <div className="h-64 w-80 border rounded-md">
          <ScrollArea className="h-full w-full">
            <div className="p-4 space-y-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <p key={i} className="text-sm">
                  This is line #{i + 1} inside the scrollable area.
                </p>
              ))}
            </div>
            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <h1>Select</h1>
        <div className="w-64">
          <Select onValueChange={setSelectedValue} value={selectedValue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectScrollUpButton />
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="lettuce">Lettuce</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
              </SelectGroup>
              <SelectScrollDownButton />
            </SelectContent>
          </Select>

          <p className="mt-4">Selected: {selectedValue || 'None'}</p>
        </div>

        <h1>Separator:</h1>
        <div>
          <p>Section 1</p>
          <Separator className="my-4" />
          <p>Section 2</p>
          <Separator className="my-4" />
          <p>Section 3</p>
        </div>

        <h1>Sheet:</h1>
        <div>
          <Sheet open={open2} onOpenChange={setOpen2}>
            <SheetTrigger asChild>
              <Button variant="default">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent position="right" size="sm">
              <SheetHeader>
                <SheetTitle>Settings</SheetTitle>
                <SheetDescription>Configure your preferences here.</SheetDescription>
              </SheetHeader>

              <div className="flex-1">
                {/* Your sheet body content here */}
                <p>This is the main content inside the sheet.</p>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <h1>Skeleton:</h1>
        <div>
          {loading ? (
            <Skeleton className="h-6 w-full mb-4 rounded" />
          ) : (
            <h1 className="text-xl font-bold mb-4">Loaded Content</h1>
          )}

          {loading ? (
            <Skeleton className="h-4 w-full rounded" />
          ) : (
            <p>This is the content that loads after the skeleton.</p>
          )}
        </div>
        <h1>Slider:</h1>
        <div>
          <label htmlFor="slider" className="block mb-2 font-semibold">
          </label>
          <Slider
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            step={1}
            aria-label="Volume"
            className="w-full"
          />
        </div>
        <h1>Switch:</h1>
        <div>
          <Switch checked={enabled} onCheckedChange={setEnabled} />
          <p className="mt-4">Switch is {enabled ? 'On' : 'Off'}</p>
        </div>

        <h1>Table:</h1>
        <div >
          <Table>
            <TableCaption>Sample User Data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>Editor</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>End of user list</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <h1>Tabs:</h1>
        <div >
          <Tabs defaultValue="tab1" className="space-y-4">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">
              <p>This is the content for Tab 1.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>This is the content for Tab 2.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>This is the content for Tab 3.</p>
            </TabsContent>
          </Tabs>
        </div>
        <h1>Textarea:</h1>
        <div>
          <label htmlFor="demo-textarea" className="block mb-2 font-medium text-gray-700">
            Enter your message:
          </label>
          <Textarea
            id="demo-textarea"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Type something here..."
            className="w-full border rounded-md p-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
          <p className="mt-2 text-sm text-gray-500">{value1.length} characters typed</p>
        </div>

        <h1>Toast:</h1>
        <ToastProvider swipeDirection="right" duration={5000}>
          <div className="p-6">
            <button
              onClick={() => setOpen3(true)}
              className="rounded bg-primary px-4 py-2 text-white hover:bg-primary"
            >
              Show Toast
            </button>

            <Toast open={open3} onOpenChange={setOpen3} className="max-w-sm">
              <ToastTitle>Notification</ToastTitle>
              <ToastDescription>This is a toast message example.</ToastDescription>
              <ToastAction altText="Undo action">
                <button
                  onClick={() => {
                    alert("Undo clicked");
                    setOpen3(false);
                  }}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Undo
                </button>
              </ToastAction>
              <ToastClose />
            </Toast>

            <ToastViewport />
          </div>
        </ToastProvider>

        <h1>Toggle:</h1>
        <div>
          <Toggle
            pressed={enabled1}
            onPressedChange={setEnabled1}
            aria-label="Toggle example"
          >
            {enabled1 ? "ON" : "OFF"}
          </Toggle>

          <div>
            <button
              className={toggleVariants({ variant: "default" })}
              onClick={() => setEnabled1(!enabled1)}
            >
              {enabled1 ? "Disable" : "Enable"} Toggle (Styled Button)
            </button>
          </div>
        </div>

        <h1>Toggle-group:</h1>
        <div>
          <ToggleGroup
            type="multiple"
            value={values}
            onValueChange={setValues}
            aria-label="Toggle group example"
            className="flex space-x-2"
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              B
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              I
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              U
            </ToggleGroupItem>
          </ToggleGroup>

          <p>Selected: {values.join(", ") || "None"}</p>
        </div>

        <h1>Tooltip:</h1>
        <TooltipProvider>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80">
                  Hover me
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="bg-black text-white rounded px-2 py-1 text-sm">
                This is a tooltip message!
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        <h1>Sidebar:</h1>
          <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar className="bg-primary text-white">
          <SidebarHeader className="p-4 font-bold text-lg">
            My App
          </SidebarHeader>

          <SidebarContent>
            {/* Group 1 */}
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-primary hover:text-white rounded-md">
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-primary hover:text-white rounded-md">
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Group 2 */}
            <SidebarGroup>
              <SidebarGroupLabel>More</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-primary hover:text-white rounded-md">
                      Help
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-primary hover:text-white rounded-md">
                      About
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 text-sm text-gray-400">
            © 2025 My App
          </SidebarFooter>
        </Sidebar>

        {/* Main content area */}
        <SidebarInset className="flex-1 bg-gray-50 p-6">
          <SidebarTrigger className="mb-4 px-3 py-1 bg-primary text-white rounded hover:bg-primary/80">
            Toggle Sidebar
          </SidebarTrigger>
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p>
            This is your main content area. You can resize the sidebar or toggle
            it using the button above.
          </p>
        </SidebarInset>
      </div>
    </SidebarProvider>
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
