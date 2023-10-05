import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import ForYou from "./for-you";
import Comment from "./comment";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Anasayfa">
          <Tab.Items>
            <Tab.Item id="for-you">Sana özel</Tab.Item>
            <Tab.Item id="following">Takip edilenler</Tab.Item>
          </Tab.Items>
        </StickyHeader>

        <Tab.Content id="for-you">
          <Comment /> {/* post gönderme kısmının komponenti */}
          <ForYou />
        </Tab.Content>
        <Tab.Content id="following">
          <Comment /> {/* post gönderme kısmının komponenti */}
        </Tab.Content>
      </Tab>
    </>
  );
}
