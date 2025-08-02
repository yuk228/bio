import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { name } = await params;

  switch (name) {
    case "signal":
      return redirect(
        "https://signal.me/#eu/1wjl2Vi2MfXDUJThkI59fxgCgY_5SidFTuTEYpe82H_ylnjyYz5HSIEHLPeya8FZ",
      );
    case "x":
      return redirect("https://x.com/yy28__");
    case "zenn":
      return redirect("https://zenn.dev/yuk228");
    case "github":
      return redirect("https://github.com/yuk228");
    default:
      return redirect("/");
  }
}
