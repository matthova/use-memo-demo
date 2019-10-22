This react-app is used to show how refactoring arrays to use React's `useMemo` hook will speed up the rendering of content.

The render time for this app was measured using [React dev tools in Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).


The average render time (when rendering 200 items) was
- With inline array mapping: ~7 milliseconds
- With useMemo: ~1.3 milliseconds

# Render time (in milliseconds)

|n Array items|Initial render with inline mapping|Average render with inline mapping|Initial render with useMemo|Average render with useMemo|
|---|---|---|---|---|
|0|   |   |   |   |
|1|   |   |   |   |
|2|   |   |   |   |
|4|   |   |   |   |
|8|   |   |   |   |
|16|   |   |   |   |
|32|   |   |   |   |
|64|   |   |   |   |
|128|   |   |   |   |
|256|   |   |   |   |
|512|   |   |   |   |
|1024|   |   |   |   |
|2048|   |   |   |   |
|4096|   |   |   |   |
 * 8192 items breaks the debugger 😅
