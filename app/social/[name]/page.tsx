import { redirect } from "next/navigation";

type Params = {
  name: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function Page({ params }: Props) {
  const { name } = await params;

  switch (name) {
    case "x":
      return redirect("https://x.com/yy28__");
    case "zenn":
      return redirect("https://zenn.dev/64919");
    case "github":
      return redirect("https://github.com/yuk228");
    default:
      return redirect("/");
  }
}
