`"@testing-library/react": "9.3.0"` without a warning:

```bash
$ yarn

$ yarn test
yarn run v1.19.1
$ jest
 PASS  src/__tests__/test.js
  ✓ formik example (54ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.521s
Ran all test suites.
✨  Done in 2.45s.
```

`"@testing-library/react": "9.3.1"` with a warning:

```bash
$ yarn add --dev @testing-library/react@9.3.1

$ yarn test
yarn run v1.19.1
$ jest
 PASS  src/__tests__/test.js
  ✓ formik example (64ms)

  console.error node_modules/react-dom/cjs/react-dom.development.js:530
    Warning: An update to Formik inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
        in Formik

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.634s
Ran all test suites.
✨  Done in 2.39s.
```