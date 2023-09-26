import Button from "~/components/button";
import SidebarSection from "~/components/sidebar-section";
import UserCards from "~/components/user-cards";
import { whoFollowUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
    const account = useAccount()
    return (
        <SidebarSection
            title="Kimi takip etmeli"
            more={`/connect_people?user_id=${account.is}`}
        >
            {whoFollowUsers.map((user) => 
            <UserCards user={user} key={user.id}/>
               
            )}
        </SidebarSection>
    )
}