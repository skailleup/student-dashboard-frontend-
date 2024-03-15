import React from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SentMailIcon from "@/icons/SentMail";
import Link from "next/link";

interface PasswordResetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function PasswordResetModal({ open, onOpenChange }: PasswordResetModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center mb-8">
              <SentMailIcon />
            </div>
            <p className="text-2xl font-bold text-center mt-8">Reset Link Sent</p>
          </DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          If you have a valid email on our record, we have sent you an email with{" "}
          <span style={{ fontWeight: "bold" }}>Password Reset Link</span>.
        </div>

        <div>
          If you did not receive the email, send a new request making sure you insert the correct email address that was
          use during your registration.
        </div>

        <div className="flex justify-center font-semibold mt-4">
          <Link href={"/auth/login"}>Go to the log in page.</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PasswordResetModal;
