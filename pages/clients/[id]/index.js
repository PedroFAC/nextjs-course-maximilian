import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ClientsProjectsPage() {
  const { push } = useRouter();

  function loadProjectHandler() {
    push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
