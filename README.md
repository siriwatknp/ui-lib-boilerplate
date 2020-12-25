### Project Setup
- [ ] Typescript
- [ ] standard-version
- [ ] husky
- [ ] eslint
- [ ] prettier
- [ ] commit-lint
- [ ] conventional-changelog
- [ ] jest

#### Development
```bash
yarn add -D typescript jest ts-jest @types/jest
```

`React`
```bash
yarn add react react-dom @testing-library/react @testing-library/user-event @testing-library/jest-dom`
```

#### Code style
```bash
npx gts init
```

#### Conventional Commit
```bash
yarn add @commitlint/cli @commitlint/config-conventional cz-conventional-changelog husky lint-staged
```

#### Build & Publish
```bash
yarn add @babel/cli standard-version
```