## Web UI

`A web UI emulating file system structure built with Javascript & React.
The goal of the project is to implement the frontend of a system like GDrive.`

### Current Features Include:

    1. Create File (dummy).
    2. Create Folder (dummy).
    3. Navigation.
    4. Search Files & Folders.
    5. Display Info of file or folder.

### Set Up

    1. Clone the repo.
    2. Install yarn if not already in your system.
    3. Change directory into the repo.
    4. Run `yarn install`.
    5. To start the project run `yarn start`.

#### App architecture:

```
Utility functions for adding nodes to the filetree lies in src/utils.

Components for creating files or folder and displaying lies in src/components.

Searchbar implements search functionality for the filesystem(see issues).

No state management solutions used since this was a one night prototype, though the need for one is justified now.
```

#### Future Directions:

```
Please check the existing issues or create one you feel is an appropriate issue.

There are plenty of issues with the UI as well as the code quality.
```

> Any UI suggestion issues should be discussed [here](https://github.com/zamhaq/web-ui/issues/1) first.


#### Contribution Guidelines

Please check [CONTRIBUTING.md](CONTRIBUTING.md)