import { useRouter } from "next/dist/client/router";
import React from "react";

export default function SelectedClientProjectPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}
