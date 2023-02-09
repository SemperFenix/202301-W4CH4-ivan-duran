# Week 4 Challenge 4

## Creación de una aplicación web de teléfono con React

La aplicación debe mostrar un teléfono que cumpla con las siguientes características:

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar borra el número completo.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
- Todo debe estar separado en los siguientes componentes:
      - Info
      - Display
      - Actions
        - Action
      - Keyboard
        - Key

## Listado de responsabilidades

- Info: contiene el mensaje correspondiente a la llamada.
- Display: contiene el número al que se está llamando.
- Keyboard: contiene a todas las teclas

  - Key:

    - Contiene los botones numéricos.
    - Actualiza el estado referido al número mostrado en display.

- Actions va a ser el contexto:
  - Contiene y gestiona el custom Hook que gestiona los estados.
  - Actualiza el número mostrado en display.
  - Compueba la longitud del número marcado.
  - Actualiza el estado de los botones llamar y colgar.
  - Actualiza el mensaje de info.

- Action:
        - Contiene los botones llamar y colgar
        - Actualiza el estado para "Actions"

## Problemas

- En el deploy me daba error por el nombre de la carpeta y archivo `app`. Para solucionarlo he tenido que actualizarlo a `App`, comenzando por mayúsucula tal como lo crea Create React App al instalarse. Antes de eso, había modificado el nombre tanto en la carpeta, como en el archivo como en el import de index.tsx, pero el deploy seguía dando error.
- En el custom hook, si utilizaba un modelo basado en propiedades, no me permitía escribir en la pantalla:

```jsx
export function usePhone() {
  const initialState = {
    number: "",
    isCallable: false,
    isCalling: false,
  } as PhoneModel;
  const [phone, setPhone] = useState(initialState);

  const updateNumber = (number: string) => {
    phone.number += number;
    setPhone(phone);
  };
  const deleteNumber = () => {
    phone.number = "" as string;
    setPhone(phone);
  };

  return { phone, updateNumber, deleteNumber };
}
```
