import React from 'react'
import { PageTitle } from '../components/page-title'
import { Form } from '../components/forms/form';
import { Input } from '../components/forms/input';
import { Button } from '../components/button';
import { helpSchema } from '../validations/help/help-schema';

export const HelpPage = () => {
  return (
    <main>
      <PageTitle title="Ayuda">Solicitar Ayuda</PageTitle>
      <Form validationSchema={helpSchema}>
        <Input label="Nombre" name="name" />
        <Input label="Email" name="email" />
        <Input label="Teléfono" name="phone" />
        <Input label="País" name="country" />
        <Input label="Necesidades" name="message" />
        <Button type="submit">Enviar</Button>
      </Form>
    </main>
  );
}
