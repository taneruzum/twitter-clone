import { useEffect, useState } from "react";
import SidebarSection from "~/components/sidebar-section";
import UserCards from "~/components/user-cards";
import { users } from "~/mock/users";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
  const [whoFollowArray, setWhoFollowArray] = useState([]);
  const currentAccount = useAccount();

  useEffect(() => {
    if (whoFollowArray.length === 0) {
      let selectedNumbers = new Set();

      while (selectedNumbers.size < 3) {
        let randomNumber = Math.floor(Math.random() * users.length);
        selectedNumbers.add(randomNumber);
      }

      let uniqueNumbers = Array.from(selectedNumbers);
      let selectedUsers = uniqueNumbers.map((uniq) => users[uniq]);

      setWhoFollowArray(selectedUsers);
    }
  }, [whoFollowArray]);

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${currentAccount.id}`}
    >
      {whoFollowArray.map((user, key) => {
        if (user.account.username !== currentAccount.username) {
          return <UserCards user={user} key={key} />;
        }
        return null;
      })}
    </SidebarSection>
  );
}
