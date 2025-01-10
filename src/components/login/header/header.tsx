import React from 'react';
import { PageHeader } from "../../ui/page-header";
import { Breadcrumb } from "../../ui/breadcrumb";
import "./header.css";

export function LoginHeader() {
  const breadcrumbItems = [
    { label: "FRONT PAGE", href: "/" },
    { label: "LOGIN", href: "/login" }
  ];

  return (
    <div className="login-header space-y-6">
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        heading="LOGIN"
        className="text-center"
      >
        <p className="text-sm text-muted-foreground">
          DON'T HAVE AN ACCOUNT?{" "}
          <a href="/signup" className="text-primary hover:underline">
            SIGN UP
          </a>
        </p>
      </PageHeader>
    </div>
  );
}

