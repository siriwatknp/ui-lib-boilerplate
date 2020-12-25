[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

### Project Setup
- [x] Typescript
- [x] jest
- [ ] google typescript style
- [ ] standard-version
- [ ] husky
- [ ] commit-lint
- [ ] conventional-changelog

#### Development
```bash
yarn add -D typescript jest ts-jest @types/jest
```

`React`
```bash
yarn add -D react react-dom @types/react @types/react-dom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

#### Code style
```bash
npx gts init
yarn add -D eslint-plugin-react
```

#### Conventional Commit
```bash
yarn add -D @commitlint/cli @commitlint/config-conventional cz-conventional-changelog husky lint-staged
```

#### Build & Publish
```bash
yarn add -D @babel/cli standard-version
```