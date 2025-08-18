import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../components/ui/Collapsible";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/Dialog";
import { Spinner } from "../../components/ui/Spinner";
import NormalForm from "./NormalForm";

export default function FormSpinnersCollapse() {
  return (
    <>
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
                  {/* <DialogHeader>
                    <DialogTitle>Profile Update</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you’re done.
                    </DialogDescription>
                  </DialogHeader> */}

                  {/* Example Form Content */}
                  {/* <div className="space-y-4">
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
                  </div> */}
                  <NormalForm/>

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


           {/* <h1>FormPopup:</h1>
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
        </div> */}

        {/* <h1>Pagination:</h1>
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
        </div> */}
    </>
  )
}
