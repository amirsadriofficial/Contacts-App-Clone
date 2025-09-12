# Contact App Clone

A simple React + TypeScript project that manages a list of contacts with CRUD functionality (Create, Read, Update, Delete). The project demonstrates local storage persistence, search, responsive UI and etc.

See it live from [here](https://contacts-app-clone.vercel.app/).

## Features

- Full Responsive - all pages
- View Contacts – List of 30 mock contacts with avatars.
- Search – Real-time search filtering.
- Add Contact – Create new contacts.
- Edit Contact – Update existing contact info.
- Delete Contact – Permission modal (desktop) or bottom sheet (mobile) before deleting.
- Local Storage Persistence – Contacts remain after refresh.

## Technologies

- React JS
- Typescript
- TailwindCSS
- Vite

## Folder Structuring

In this project we follow the folder structuring based on our folder categoriy.

```bash
.
└── src/
    └── assets
    └── components
    └── constants
    └── pages
    └── types
    └── utils
```

## Folders Category

- `assets`: all of assets related to user interface such icons, images and etc.
- `components`: all of component related to user interacting such Inputs, Buttons, Text fields and etc.
- `constants`: all of constant variables like mock data, queries and ect.
- `pages`: all of the pages.
- `types`: all of the global types.
- `utils`: all of static data and helper functions such Translation, DateCalculater and etc.

## Setup

After cloning the repository, enter the main directory of the project and run the following command to install the required packages:

```
### pnpm install
```

After installing the packages, run the following command to run the program:

```
### pnpm run dev
```

After the project is executed, open the following address in your browser and view the website:

### http://localhost:3000
