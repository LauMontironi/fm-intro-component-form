# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  [The challenge](#Introcomponentwithsignupform)
  [Screenshot]![](./images/screenshot.png)
  [Links](#links)
- [My process](#my-process)
- [Built with](#Html,#Css,#Javascript)
- [What I learned](#validacionDeFormularios)
- [Continued development](#continued-development)
- [Author](#@LauMontironi)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [https://github.com/LauMontironi](https://github.com/LauMontironi/nombre-de-tu-repo)
- Live Site URL: [Añade aquí la URL de tu sitio en vivo (por ejemplo, en Netlify o Vercel)](https://tu-sitio-en-vivo.netlify.app)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Implementé lógica para verificar si un campo está vacío o si el formato del correo es inválido, alternando las clases de error y los mensajes dinámicamente
**Técnica Mobile-First y Flexbox:** Me aseguré de que el diseño fuera completamente responsivo, usando flex-direction: column;en _mobile_ yflex-direction: row; en _desktop_ para reorganizar el contenido eficientemente.

```css
.form-input.error {
  border: 2px solid var(--red);
  background-image: url("../images/icon-error.svg");
  background-repeat: no-repeat;
  background-position: right 1.75rem center;
}
```
