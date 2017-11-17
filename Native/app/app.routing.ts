import { AuthentificationComponent  } from "./pages/authentification/auth";
import { HomeComponent  } from "./pages/Home/home";
import { ProductComponent  } from "./product/ProductComponent";
import { ProductItemComponent  } from "./product/ProductItem";
import { ChallengesComponent  } from "./pages/challenges/ChallengesComponent";
import { MyChallengesComponent  } from "./pages/challenges/Meschallenges";
import { ChallengesDetailComponent } from  "./pages/challenges/ChallengesDetail"

export const routes: any= [
  { path: "", component: AuthentificationComponent  },
  { path: "home", component: HomeComponent  },
  {path:"challenges", component: ChallengesComponent},
  {path:"meschallenges", component: MyChallengesComponent},
  {path:"detailChallenges/:id", component: ChallengesDetailComponent }
];

export const navigatableComponents: any= [
  AuthentificationComponent,HomeComponent,ProductComponent,ProductItemComponent, ChallengesComponent,MyChallengesComponent,ChallengesDetailComponent
];
