import React from "react";
// import PostFormView from "./PostFormView";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PostFormView from "./PostFormView";

export function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      
      <Button onClick={handleOpen} variant="gradient">
        Add a Post
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Create a Post</DialogHeader>
        <DialogBody divider className="overflow-y-auto">
          <PostFormView close={handleOpen}/>
        </DialogBody>
      </Dialog>
    </>
  );
}
