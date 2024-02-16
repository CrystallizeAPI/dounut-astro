# AstroJS Boilerplate

---

This repository is what we call a "subtree split": a read-only copy of one directory of the main repository. If you want to report or contribute, you should do it on the main repository: https://github.com/CrystallizeAPI/boilerplates.

---

The product storytelling boilerplate is a minimal eCommerce boilerplate built using AstroJS and Crystallize. You can also check out the [live demo](https://dounot.milliseconds.live/) (deploy it) of this boilerplate.

![dounut-astro-local](https://github.com/CrystallizeAPI/boilerplates/assets/26195876/dfe351b9-69dc-4e9e-947b-e89ff07151a7)



## What this guide covers:

- Setting up your project
- Instructions for running the project
- Accessing the development site
- Folder structure of the boilerplate
- Editing the components and the theme
- Deploying the project

## Getting Started

To get started, head over to GitHub and clone [the repository](https://github.com/CrystallizeAPI/dounut-astro). Make sure to install all the required packages by running the following command for both the folders:

```bash
npm install

```

## Running the Project

Running the project in development is straightforward. To start the development server, run the following command:

```bash
npm run dev

```

## Accessing the Development Site

Once the development server is running, you will be able to browse to http://localhost:4321/.

<img width="1437" alt="dounut-astro-dev-server" src="https://github.com/CrystallizeAPI/boilerplates/assets/26195876/d615da75-54dc-4866-a8fd-5054fca3a23e">


## Folder Structure

This section provides you with a better understanding of the folder structure.

**src/components**

Contains all the components used throughout the application

**src/use-cases**

Includes the GraphQL queries and mutations used to communicate with Crystallize.

**src/pages**

Has all the individual pages the website contains.

## Editing the theme

All the theme related information can be edited in the **tailwind.config.js** file. This includes the colors, spacing, typography used throughout the application.

## Editing the components

Components can be edited by heading over to the **components** folder in **src.**

### Frontpage

The frontpage contains a grid and it is fetching all the grid related information (including the layout) from Crystallize. You can directly edit the grid in Crystallize for changes to take effect. Editing the styling such as the background and typography can be done in the **grid-item** component.

![frontpage-dounut-astro-grid](https://github.com/CrystallizeAPI/boilerplates/assets/26195876/80bebeb5-c2eb-4a96-9721-392bac109e17)

### Product

Individual product pages are using two components - one is the **product** component that contains the hero section, and the ‘Add to cart’ button and then the **product-body** component that can be edited to change the layout of the marketing information displayed on the page.

### Cart, Checkout, and Confirmation

The basket, checkout, and the confirmation pages can be edited in their respective files located in the pages folder.


> Please note that this boilerplate does not contain payment integrations such as Stripe. It is using a dummy payment method.
>
