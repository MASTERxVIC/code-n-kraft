"use client";

import Button from "@/components/ui/Button";
import { useLeadForm } from "@/components/ui/LeadFormModal";

/* Theme ka Button, lekin click pe enquiry form khulta hai —
   service pre-selected (LeadFormModal ke pills se exact match). */
export default function ServiceCtaButton({ preset, children, ...props }) {
  const { openLeadForm } = useLeadForm();
  return (
    <Button onClick={() => openLeadForm(preset)} {...props}>
      {children}
    </Button>
  );
}
