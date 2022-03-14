import type { InitialOptionsTsJest } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets';

const jestConfig: InitialOptionsTsJest = {
  preset: 'ts-jest/presets/default-esm',
  transform: {
    ...tsjPreset.transform,
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};

export default jestConfig;
