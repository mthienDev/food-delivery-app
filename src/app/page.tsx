// Root redirect → customer home
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/");
}
