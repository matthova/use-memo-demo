This react-app is used to show how refactoring arrays to use React's `useMemo` hook will speed up the rendering of content.

The render time for this app was measured using [React dev tools in Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

Some things worth noting:
- Render time varies based on the browser
- Render time varies based on the hardware
- Render time varies based on other processes / memory available
- There is a tradeoff between computation and memory. We don't know where the line is, but eventually, useMemo could potentially become a memory hog
- This test example may not effectively represent real app performance scenarios
- Overhead may be caused by the profiler
- Overhead may be caused by create-react-app in `dev` instead of `release` mode

# Render time (in milliseconds)

|n Array items|Initial render with inline mapping|Average render with inline mapping|Initial render with useMemo|Average render with useMemo|
|---|---|---|---|---|
|0|  4.7 | 0.5  |   |   |
|1|  6 |  0.6 |   |   |
|2|  6 | 0.6  |   |   |
|4|  5.4 |  0.7 |   |   |
|8|  6.3 | 0.7 |   |   |
|16|  6.9 | 1.1  |   |   |
|32|  9.3 |  1.5 |   |   |
|64| 8.6  |  2.9 |   |   |
|128| 12.4 | 4.9 |   |   |
|256|  15.3 | 8.9  |   |   |
|512| 24.2  |  14.2 |   |   |
|1024|  42.6 | 19.0 |   |   |
|2048| 77.5  |  20.7 |   |   |
|4096|  111.1 |  39.0 |   |   |
 * 8192 items breaks the debugger 😅
