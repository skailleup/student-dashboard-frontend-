import React from "react";
import Link from "next/link";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SentMailIcon from "@/icons/SentMail";
import SuccessfulIcon from "@/icons/Successful";

interface PasswordResetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function PasswordChangeSuccessModal({ open, onOpenChange }: PasswordResetModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center mb-8">
              <SuccessfulIcon />
            </div>
            <p className="text-2xl font-bold text-center mt-8">Successful</p>
          </DialogTitle>
        </DialogHeader>

        <p className="text-center">You have successfully changed your password.</p>

        <div className="flex justify-center font-semibold mt-4">
          <Link href={"/auth/login"}>Go to the log in page.</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PasswordChangeSuccessModal;
