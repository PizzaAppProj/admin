import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@app/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@app/modules/menu/components/menu-create/menu-create.component";
import { authProvider } from "./core/auth-provider";
import { apolloClient } from "./core/apollo-client";

export const App = () => {
  const [dateProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );
  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        client: apolloClient,
      });
      setDataProvider(dp);
    };
    buildDataProvider();
  }, []);
  if (!dateProvider) {
    return <Loading />;
  }
  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dateProvider}
        authProvider={authProvider}
        requireAuth
      >
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
        />
      </Admin>
    </>
  );
};
