import { useRouter } from "next/dist/client/router";
import React from "react";

export default function PortfolioProjectPage() {
  const { pathname, query } = useRouter();
  console.log(pathname);
  console.log(query);
  return (
    <div>
      <h1>The portfolio project page - {query.projectid}</h1>
    </div>
  );
}
