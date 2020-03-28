module.exports = {
  "extends": [
    "plugin:react/recommended",
    "google"
  ],
  "plugins": [
    "babel",
    "react",
    "import",
    "markdown",
    "sonarjs",
    "react-hooks"
  ],
  rules: {
    // "sonarjs/cognitive-complexity": ["error", 8],
    "sonarjs/no-inverted-boolean-check": ["error"],
    "sonarjs/no-identical-functions": ["error"],
    "linebreak-style": 0,
    "jsx-a11y/label-has-associated-control": 1,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "babel/camelcase": [ "error",
      {
        "ignoreDestructuring":true,
        "properties":"never"
      }
    ],
    "camelcase": 0,
    "import/no-cycle": [2, { "maxDepth": 1 }],
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "no-console": ["error"],
    "comma-dangle": 0,
    "semi": 0,
    "no-confusing-arrow":0,
    "no-negated-condition":0,
    "no-plusplus": 0,
    "experimentalDecorators":true,
    "global-require":0,
    "require-jsdoc":0,
    "strict":0,
    "sort-imports":0,
    "sort-keys":0,
    "object-curly-newline":0,
    "class-methods-use-this":0,
    "line-comment-position":0,
    "id-length":0,
    "max-len":[ "error", {
      "code": 100,
      "tabWidth": 4,
      "ignoreComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreUrls": true
    }],
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line":0,
    "react/prefer-stateless-function":[ "error",
      {
        "ignorePureComponents":true
      }
    ],
    "react/jsx-filename-extension":0,
    "react/no-danger":0,
    "react/no-render-return-value":0,
    "react/destructuring-assignment":0,
    "react/require-default-props":0,
    "react/no-array-index-key":0,
    // https://thecodebarbarian.com/async-stack-traces-in-node-js-12
    "no-return-await": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
