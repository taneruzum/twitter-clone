import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
    return (
        <>
            <Tab activeTab="for-you" >

                < StickyHeader title="Anasayfa">
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Sana özel
                        </Tab.Item>
                        <Tab.Item id="following">
                            Takip edilenler
                        </Tab.Item>

                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    1. content
                </Tab.Content>
                <Tab.Content id="following">
                    2. content
                </Tab.Content>

            </Tab>

            home component
        </>
    )
}