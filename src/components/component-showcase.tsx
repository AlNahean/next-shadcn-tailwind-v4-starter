"use client"

import { useState } from "react"
import { ChevronsUpDown, Info } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { useToast } from "@/components/ui/use-toast"
// import { Toaster } from "@/components/ui/toaster"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Slider } from "@/components/ui/slider"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type ComponentCategory = "inputs" | "display" | "navigation" | "feedback" | "layout" | "data"

interface ComponentShowcaseProps {
    filter?: ComponentCategory | "all"
}

export default function ComponentShowcase({ filter = "all" }: ComponentShowcaseProps) {
    // const { toast } = useToast()
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [progress, setProgress] = useState(45)
    const [isOpen, setIsOpen] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [isCommandOpen, setIsCommandOpen] = useState(false)
    const [sliderValue, setSliderValue] = useState([50])

    // const showToast = () => {
    //     toast({
    //         title: "Toast Notification",
    //         description: "This is a toast notification example",
    //     })
    // }

    const components = {
        inputs: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Input Components</CardTitle>
                        <CardDescription>Form controls and input elements</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Type your message here" />
                        </div>

                        <div className="grid gap-3">
                            <Label>Checkbox</Label>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Radio Group</Label>
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Option One</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Option Two</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="select">Select</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="option1">Option 1</SelectItem>
                                    <SelectItem value="option2">Option 2</SelectItem>
                                    <SelectItem value="option3">Option 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-3">
                            <Label>Switch</Label>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode" />
                                <Label htmlFor="airplane-mode">Airplane Mode</Label>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Slider</Label>
                            <Slider defaultValue={[50]} max={100} step={1} value={sliderValue} onValueChange={setSliderValue} />
                            <span className="text-sm text-muted-foreground">Value: {sliderValue}</span>
                        </div>

                        <div className="grid gap-3">
                            <Label>Buttons</Label>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="default">Default</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                                <Button variant="destructive">Destructive</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),

        display: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Display Components</CardTitle>
                        <CardDescription>Components for displaying content and information</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label>Avatar</Label>
                            <div className="flex gap-2">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>AB</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Badge</Label>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Progress</Label>
                            <Progress value={progress} className="w-full" />
                            <div className="flex justify-between">
                                <Button variant="outline" size="sm" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                                    Decrease
                                </Button>
                                <span className="text-sm text-muted-foreground">{progress}%</span>
                                <Button variant="outline" size="sm" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                                    Increase
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Card</Label>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card content goes here.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button>Action</Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="grid gap-3">
                            <Label>Hover Card</Label>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button variant="link">Hover me</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <div className="flex justify-between space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                            <AvatarFallback>VC</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">@shadcn</h4>
                                            <p className="text-sm">The creator of shadcn/ui and a software developer.</p>
                                            <div className="flex items-center pt-2">
                                                <span className="text-xs text-muted-foreground">Joined December 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </div>

                        <div className="grid gap-3">
                            <Label>Skeleton</Label>
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),

        navigation: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Navigation Components</CardTitle>
                        <CardDescription>Components for navigation and menus</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label>Tabs</Label>
                            <Tabs defaultValue="account" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="account">Account</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account" className="p-4 border rounded-md mt-2">
                                    Account settings content
                                </TabsContent>
                                <TabsContent value="password" className="p-4 border rounded-md mt-2">
                                    Password settings content
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div className="grid gap-3">
                            <Label>Dropdown Menu</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        Open Menu <ChevronsUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="grid gap-3">
                            <Label>Navigation Menu</Label>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/"
                                                        >
                                                            <div className="text-sm font-medium leading-none">Introduction</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Re-usable components built using Radix UI and Tailwind CSS.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {["Alert Dialog", "Hover Card", "Progress", "Scroll-area", "Tabs"].map((component) => (
                                                    <li key={component}>
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                href="/"
                                                            >
                                                                <div className="text-sm font-medium leading-none">{component}</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    UI component for {component.toLowerCase()}.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                            Documentation
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="grid gap-3">
                            <Label>Command</Label>
                            <div>
                                <Button variant="outline" onClick={() => setIsCommandOpen(true)}>
                                    Open Command Menu
                                </Button>
                                <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
                                    <CommandInput placeholder="Type a command or search..." />
                                    <CommandList>
                                        <CommandEmpty>No results found.</CommandEmpty>
                                        <CommandGroup heading="Suggestions">
                                            <CommandItem>
                                                <span>Calendar</span>
                                            </CommandItem>
                                            <CommandItem>
                                                <span>Search</span>
                                            </CommandItem>
                                            <CommandItem>
                                                <span>Settings</span>
                                            </CommandItem>
                                        </CommandGroup>
                                        <CommandSeparator />
                                        <CommandGroup heading="Actions">
                                            <CommandItem>
                                                <span>New File</span>
                                                <CommandShortcut>⌘N</CommandShortcut>
                                            </CommandItem>
                                            <CommandItem>
                                                <span>New Window</span>
                                                <CommandShortcut>⌘⇧N</CommandShortcut>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </CommandDialog>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),

        feedback: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Feedback Components</CardTitle>
                        <CardDescription>Components for user feedback and notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label>Alert</Label>
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription>This is an informational alert to provide context.</AlertDescription>
                            </Alert>
                        </div>

                        {/* <div className="grid gap-3">
                            <Label>Toast</Label>
                            <Button onClick={showToast}>Show Toast Notification</Button>
                            <Toaster />
                        </div> */}

                        <div className="grid gap-3">
                            <Label>Tooltip</Label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">Hover for Tooltip</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>This is a tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),

        layout: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Layout Components</CardTitle>
                        <CardDescription>Components for layout and structure</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label>Accordion</Label>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It comes with default styles that matches the other components.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It's animated by default, but you can disable it if you prefer.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="grid gap-3">
                            <Label>Collapsible</Label>
                            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
                                <div className="flex items-center justify-between space-x-4 px-4">
                                    <h4 className="text-sm font-semibold">@shadcn/ui</h4>
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            {isOpen ? "Hide" : "Show"}
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <div className="rounded-md border px-4 py-2 font-mono text-sm">@shadcn/ui</div>
                                <CollapsibleContent className="space-y-2">
                                    <div className="rounded-md border px-4 py-2 font-mono text-sm">@shadcn/ui/accordion</div>
                                    <div className="rounded-md border px-4 py-2 font-mono text-sm">@shadcn/ui/button</div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="grid gap-3">
                            <Label>Dialog</Label>
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Open Dialog</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Username
                                            </Label>
                                            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="grid gap-3">
                            <Label>Drawer</Label>
                            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                <DrawerTrigger asChild>
                                    <Button variant="outline">Open Drawer</Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Edit profile</DrawerTitle>
                                        <DrawerDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="p-4 pb-0">
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                    Name
                                                </Label>
                                                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="username" className="text-right">
                                                    Username
                                                </Label>
                                                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <DrawerFooter>
                                        <Button>Save changes</Button>
                                        <DrawerClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>

                        <div className="grid gap-3">
                            <Label>Sheet</Label>
                            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline">Open Sheet</Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Edit profile</SheetTitle>
                                        <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Username
                                            </Label>
                                            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <Button type="submit">Save changes</Button>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="grid gap-3">
                            <Label>Separator</Label>
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                                <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                                <Separator className="my-4" />
                                <div className="flex h-5 items-center space-x-4 text-sm">
                                    <div>Blog</div>
                                    <Separator orientation="vertical" />
                                    <div>Docs</div>
                                    <Separator orientation="vertical" />
                                    <div>Source</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Scroll Area</Label>
                            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium leading-none">Scroll Area</h4>
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className="text-sm">
                                            Item {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),

        data: (
            <>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Data Display Components</CardTitle>
                        <CardDescription>Components for displaying data</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                            <Label>Table</Label>
                            <Table>
                                <TableCaption>A list of recent invoices</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Method</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">INV001</TableCell>
                                        <TableCell>Paid</TableCell>
                                        <TableCell>Credit Card</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">INV002</TableCell>
                                        <TableCell>Pending</TableCell>
                                        <TableCell>PayPal</TableCell>
                                        <TableCell className="text-right">$150.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">INV003</TableCell>
                                        <TableCell>Unpaid</TableCell>
                                        <TableCell>Bank Transfer</TableCell>
                                        <TableCell className="text-right">$350.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        <div className="grid gap-3">
                            <Label>Calendar</Label>
                            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                            <div className="text-sm">Selected date: {date ? format(date, "PPP") : "None"}</div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Popover</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline">Open Popover</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium leading-none">Dimensions</h4>
                                            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="width">Width</Label>
                                                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                                            </div>
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="height">Height</Label>
                                                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                </Card>
            </>
        ),
    }

    // Filter components based on the filter prop
    const renderComponents = () => {
        if (filter === "all") {
            return (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        {components.inputs}
                        {components.navigation}
                    </div>
                    <div className="space-y-6">
                        {components.display}
                        {components.feedback}
                    </div>
                    <div className="space-y-6">{components.layout}</div>
                    <div className="space-y-6 lg:col-span-2">{components.data}</div>
                </div>
            )
        }

        return <div className="space-y-6">{components[filter]}</div>
    }

    return renderComponents()
}
