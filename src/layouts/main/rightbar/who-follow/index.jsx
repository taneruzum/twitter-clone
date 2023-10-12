import { useState } from "react";
import SidebarSection from "~/components/sidebar-section";
import UserCards from "~/components/user-cards";

import { users } from "~/mock/users";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
  const [whoFollowArray] = useState([]);

  const currentAccount = useAccount();

  let selectedNumbers = new Set();

  while (selectedNumbers.size < 3) {
    let randomNumber = Math.floor(Math.random() * users.length);
    selectedNumbers.add(randomNumber);
  }

  let uniqueNumbers = Array.from(selectedNumbers);
  for (const uniq of uniqueNumbers) {
      whoFollowArray.push(users[uniq]);
  }
  whoFollowArray.map((item) => {
    console.log(item, "spodkfposkdf");
  });
  //   uniqueNumbers.map((randomNumber) => {
  //     let i = 0;
  //     whoFollowArray[i] = users[randomNumber];
  //     i++;
  //   });
  //   console.log(whoFollowArray);

  //   whoFollowArray.map((item) => {
  //     console.log(item, "itemm");
  //   });

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${currentAccount.id}`}
    >
      {whoFollowArray.map((user) => {
        if (user.account.username !== currentAccount.username) {
          return <UserCards user={user} key={user.account.username} />;
        }
      })}
    </SidebarSection>
  );
}
