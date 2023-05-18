module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    }
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      
    ],
  },
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  
  moduleNameMapper: {
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1", 
    "\\.(css)$": "<rootDir>/__mocks__/fileMock.js"
  },
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.ts"],
  coverageReporters: ["text", "html"],
  coverageDirectory: "<rootDir>/coverage/",
  
};
