import { Menu } from "@app/core/types";
import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";

export const MenuEdit = () => {
  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth label="Назва" />
        <TextInput source="image" fullWidth label="Фото" />
        <TextInput source="ingredients" fullWidth label="Інгредієнти" />
        <NumberInput source="price" label="Ціна в грн." />
        <NumberInput source="weight" label="Вага в гр." />
      </SimpleForm>
    </Edit>
  );
};
