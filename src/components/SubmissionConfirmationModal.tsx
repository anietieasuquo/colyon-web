"use client";

import Link from "next/link";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

interface SubmissionConfirmationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    homeHref?: string;
    ctaLabel?: string;
}

const SubmissionConfirmationModal = ({
                                         open,
                                         onOpenChange,
                                         title = "Message received",
                                         description = "Thanks for reaching out. Our team will get back to you shortly.",
                                         homeHref = "/",
                                         ctaLabel = "Return home",
                                     }: SubmissionConfirmationModalProps) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md text-center">
            <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
                <DialogDescription className="text-base text-foreground/80">
                    {description}
                </DialogDescription>
            </DialogHeader>
            <Button asChild variant="hero" className="w-full mt-4">
                <Link href={homeHref}>{ctaLabel}</Link>
            </Button>
        </DialogContent>
    </Dialog>
);

export default SubmissionConfirmationModal;

