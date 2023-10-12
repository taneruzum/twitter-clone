
import { useEffect, useState } from "react";
import SidebarSection from "~/components/sidebar-section";
import UserCards from "~/components/user-cards";
import { whoFollowUsers } from "~/mock";
import { users } from "~/mock/users";
import { useAccount } from "~/store/auth/hooks";



export default function WhoFollow() {

    const account = useAccount()


    


    return (

        <SidebarSection
            title="Kimi takip etmeli"
            more={`/connect_people?user_id=${account.is}`}
        >
            {users.map((user) =>
                <UserCards user={user} key={user.account.username} />
  
            )}



        </SidebarSection>


    )
}