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
|0|  4.7 | 0.5  | 5.7  |  0.5 |
|1|  6 |  0.6 | 5.9  | 0.5  |
|2|  6 | 0.6  | 6.1  | 0.5 |
|4|  5.4 |  0.7 | 6.4  | 0.5 |
|8|  6.3 | 0.7 |  6.7 | 0.6 |
|16|  6.9 | 1.1  | 7.1  | 0.6  |
|32|  9.3 |  1.5 | 7.7  | 0.5 |
|64| 8.6  |  2.9 |  10.6 | 0.7  |
|128| 12.4 | 4.9 |  10.9 |  0.9 |
|256|  15.3 | 8.9  |  15.5 | 1.5  |
|512| 24.2  |  14.2 |  24.9 | 2.5 |
|1024|  42.6 | 19.0 |  42.9 |  4.4 |
|2048| 77.5  |  20.7 |  80.2 | 7.1 |
|4096|  111.1 |  39.0 |  122.9 | 11.4 |
 * 8192 items breaks the debugger 😅
