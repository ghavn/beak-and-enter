# Beak & Enter

A tiny physics food heist in an Australian park. Play an ibis, steal chips, pizza and a wobbling cake, and drag six snack points into your nest before the ranger catches you.

Inspired by [Bin chicken syndicate](https://gamehavn.com/ideas/bin-chicken-syndicate) by Mas Llams on GameHavn. Original idea ID: `2e33629d-22a4-4fda-92bb-1968bcbf36b3`.

## Play

[Play Beak & Enter](https://ghavn.github.io/beak-and-enter/).

- WASD or arrow keys: move.
- Space: grab nearby food or drop it. Drop food **inside the nest** to bank it.
- Q: squawk. It makes noise and annoys absolutely everyone, without changing the ranger's behavior.
- Restart button or R: start a fresh heist.
- Touch devices: use the directional pad, Grab / drop, and Squawk buttons. Two fingers allow movement and actions together.

Chips are worth 1 point, pizza 2, and cake 3. Heavy food slows you down, swings on a spring tether, and collides with park benches. The ranger pursues nearby thieves carrying food; getting caught returns the food and costs eight seconds. Stash all six points within two minutes to win.

## Run and build

Requires Node.js 22 or later. No runtime or build dependencies.

```sh
npm ci
npm run dev
# Open http://localhost:4173
npm test
npm run build
```

The static build is in `dist/`. All asset references are relative, including the JavaScript module imports, for GitHub Pages subdirectory hosting. `.github/workflows/pages.yml` builds, tests, and deploys the main branch with GitHub Actions. Enable Pages with GitHub Actions as its build source.

## Scope

This first working prototype has one park, three food items, a ranger, a nest, win/loss screens, touch controls, restart, and a dedicated squawk button. The simplified spring and circle collision physics demonstrate awkward food hauling. It does not yet include gang commands, upgrades, disguises, multiple levels, or full rigid-body physics. Gameplay is local and has no account, tracking, purchases, or network API dependencies.

## Assets and credits

Park, ibis, ranger, food, interface, and sound are original procedural Canvas/Web Audio artwork created for this prototype. No downloaded illustration or audio assets are used. Google Fonts supplies DM Sans (Colophon Foundry) and Space Grotesk (Florian Karsten), both under the SIL Open Font License; system sans-serif fallbacks are provided. The game works if the font service is unavailable.
