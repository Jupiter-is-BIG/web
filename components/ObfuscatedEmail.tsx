"use client";

import { useState } from "react";

export function ObfuscatedEmail({ email }: { email: string }) {
  const [show, setShow] = useState(false);
  const [user, domain] = email.split("@");
  const [domainName, tld] = domain.split(".");

  return show ? (
    <a
      href={`mailto:${email}`}
      className="text-xs font-mono text-black hover:text-black transition-colors"
    >
      {email}
    </a>
  ) : (
    <button
      onClick={() => setShow(true)}
      className="text-xs font-mono text-black hover:text-black transition-colors cursor-pointer"
    >
      {user} [at] {domainName} [dot] {tld}
    </button>
  );
}