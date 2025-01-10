import React from 'react';
import { PageHeader } from "../../ui/page-header";
import { Breadcrumb } from "../../ui/breadcrumb";
import "./header.css";

export function SignupHeader() {
  const breadcrumbItems = [
    { label: "FRONT PAGE", href: "/" },
    { label: "SIGN UP", href: "/signup" }
  ];

  return (
    <div className="signup-header space-y-6">
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        heading="SIGN UP"
        className="text-center"
      >
        <p className="text-sm text-muted-foreground">
          ALREADY HAVE AN ACCOUNT?{" "}
          <a href="/login" className="text-primary hover:underline">
            SIGN IN
          </a>
        </p>
      </PageHeader>
    </div>
  );
}

