"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ComingSoon = dynamic(() => import("@/components/ui/coming-soon").then(mod => mod.ComingSoon), {
  ssr: false
});

export default function ForDevPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/dashboard");
  };

  return (
    <ComingSoon
      title="For Developers - API & Integration"
      onClose={handleClose}
    />
  );
} 