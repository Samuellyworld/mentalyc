# Mentalyc 
[![Mentalyc-CI/CD](https://github.com/Samuellyworld/mentalyc/actions/workflows/eslint.yml/badge.svg)](https://github.com/Samuellyworld/mentalyc/actions/workflows/eslint.yml)

- Mentalyc is a tool that helps therapists automatically write their therapy notes using AI.
- Demo Live at : https://mentalyc.netlify.app


### Technologies && Tools.
- ReactJs -[web framework]
- TypeScript - [adds optional static type-checking to Javascript]
- Styled-Components - [For styling]
- Jest - [for components testing]


## functionalities.
- functional timer.
- functional progress bar.
- persistence [when a user refresh their browser, their notes are still saved].
- Mobile responsiveness.

## Code Reviews && Style

- All React components and functional components are written in the `.tsx` format.
- Test files are saved with a `.test.ts` format.
- Styles are saved in a `.styles.ts` format.
- All statically typed types utilized in the application are located in the `types` folder.
```
export const noteTypes : OptionValueTypes[] = [
    {
      label : "Progress note - 80 left",
      value : 0.5 // 0.5 minutes
    },
    {
      label : "Soap  note - 70 left",
      value : 1 // 1 minutes
    },
    {
      label : "EMDR note - 20 left",
      value : 3 // 5 minutes
    },
    {
      label : "Couples therapy note - 80 left",
      value : 6 // 6 minutes

    },
    {
      label: "Family therapy note - 50 left",
      value : 10// 10 minutes
    }
]
```
This object in the `utils` file  contain the notes types label and the fake timer i created for each progress bars when a user select any of the dropdown options. 

## Demo.
![image](https://i.postimg.cc/LXD6tj0K/Screenshot-2023-03-09-at-05-49-18.png)

![image](https://i.postimg.cc/C5Wyk1Yp/IMG-8372.png)

## Tests.

- components tests written in jest + typescript
- test coverage + tests

![image](https://i.postimg.cc/NG704fVM/Screenshot-2023-03-09-at-01-51-57.png)

## Run Web App on Local Environment.

* git clone the repository.

```
  $ git clone https://github.com/Samuellyworld/mentalyc.git
```

- open `mentalyc`.

```
  $ cd mentalyc
```

- install dependencies.
```
 $ npm install
```

- start web app.

```
 $ npm start
```

- run tests.

```
 $ npm run test
```

- check coverage.

```
 $ npm run coverage
```

## License.

Copyright Mentalyc 2023 [**MIT LICENSE**](/LICENSE)
