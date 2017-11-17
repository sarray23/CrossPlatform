import { AuthentificationComponent  } from "./pages/authentification/auth";
import { HomeComponent  } from "./pages/Home/home";
import { ProductComponent  } from "./product/ProductComponent";
import { ProductItemComponent  } from "./product/ProductItem";

export const routes: any= [
  { path: "", component: AuthentificationComponent  },
  { path: "home/:email", component: HomeComponent  },
  {path:"prods", component: ProductComponent},
  {path:"detail/:id", component: ProductItemComponent}
];

export const navigatableComponents: any= [
  AuthentificationComponent,HomeComponent,ProductComponent,ProductItemComponent
];
