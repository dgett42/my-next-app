This project is a simple web app built with that features a reusable counter component. It lets you increase, decrease, or reset a count and change the step value.

## Getting Started

How to run Locally:

```bash
npm install
npm run dev
```
How to build

```bash

npm run build
npm start
```
Features:

    Counter displays and updates correctly

    Increment and decrement by step value

    Reset returns to initial count

    Step input updates behavior live (min = 1)

    Decrement button disables when count would drop below 0

    Supports initialCount and initialStep props for reusability

    Two counter components rendered on the home page

    Accessible with labeled buttons

Known Issues:

    Count and step values reset when the page is refreshed

    No data persistence or external state management

    Styling is minimal and focused on function rather than design