# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Tests
## Test Modules
```js 

debug: [Function: debug],
rerender: [Function: rerender],
    //const {results} = render(YourComponent, {ComponentOptions}, {RenderOptions})
    // ComponentOptions => These are the options you pass when instantiating your Svelte 
    // {
    //  target: MyTarget,
    //  props: {myProp: 'value'},
    // }

unmount: [Function: unmount],

$$ ByLabelText
queryByLabelText: [Function: bound ],
queryAllByLabelText: [Function: bound ],
getByLabelText: [Function: bound ],
getAllByLabelText: [Function: bound ],
findByLabelText: [Function: bound ],
findAllByLabelText: [Function: bound ],

// getByLabelText(
//   // If you're using `screen`, then skip the container argument:
//   container: HTMLElement,
//   text: TextMatch,
//   options?: {
//     selector?: string = '*',
//     exact?: boolean = true,
//     normalizer?: NormalizerFn,
//   }): HTMLElement

queryByPlaceholderText: [Function: bound ],
queryAllByPlaceholderText: [Function: bound ],
queryByText: [Function: bound ],
queryAllByText: [Function: bound ],
queryByDisplayValue: [Function: bound ],
queryAllByDisplayValue: [Function: bound ],
queryByAltText: [Function: bound ],
queryAllByAltText: [Function: bound ],
queryByTitle: [Function: bound ],
queryAllByTitle: [Function: bound ],
queryByRole: [Function: bound ],
queryAllByRole: [Function: bound ],
queryByTestId: [Function: bound ],
queryAllByTestId: [Function: bound ],


getByPlaceholderText: [Function: bound ],
getAllByPlaceholderText: [Function: bound ],
getByText: [Function: bound ],
getAllByText: [Function: bound ],
getByDisplayValue: [Function: bound ],
getAllByDisplayValue: [Function: bound ],
getByAltText: [Function: bound ],
getAllByAltText: [Function: bound ],
getByTitle: [Function: bound ],
getAllByTitle: [Function: bound ],
getAllByRole: [Function: bound ],
getByRole: [Function: bound ],
getByTestId: [Function: bound ],
getAllByTestId: [Function: bound ],


findAllByPlaceholderText: [Function: bound ],
findByPlaceholderText: [Function: bound ],
findAllByText: [Function: bound ],
findByText: [Function: bound ],
findAllByDisplayValue: [Function: bound ],
findByDisplayValue: [Function: bound ],
findAllByAltText: [Function: bound ],
findByAltText: [Function: bound ],
findAllByTitle: [Function: bound ],
findByTitle: [Function: bound ],
findAllByRole: [Function: bound ],
findByRole: [Function: bound ],
findAllByTestId: [Function: bound ],
findByTestId: [Function: bound ]
```

