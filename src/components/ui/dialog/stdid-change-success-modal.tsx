import React from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SentMailIcon from "@/icons/SentMail";
import Link from "next/link";

interface PasswordResetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function StudentIdChangeSuccessModal({ open, onOpenChange }: PasswordResetModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center mb-8">
              <SentMailIcon />
            </div>
            <p className="text-2xl font-bold text-center mt-8">Your Student ID has been sent</p>
          </DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          If you have a valid email in our records, we will send you an email with your
          <span style={{ fontWeight: "bold" }}> Student ID</span>.
        </div>

        <div>
          If you do not receive an email with a student number, please send a new request to make sure you insert the
          correct email address.
        </div>

        <div className="flex justify-center font-semibold mt-4">
          <Link href={"/auth/login"}>Go to the log in page.</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default StudentIdChangeSuccessModal;
