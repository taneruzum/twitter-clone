
import Topics from "~/components/topics";
import Premium from "./premium";
import Search from "./search";


export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
    </aside>
  );
}
