import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const MenuCreate = () => (
  <Create title="Додати елемент меню">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <TextInput source="image" fullWidth label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгредієнти" />
      <NumberInput source="price" label="Ціна в грн." />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Create>
);
