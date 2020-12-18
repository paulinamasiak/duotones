import withCssBaseline from './decorators/withCssBaseline';
import withTheme from './decorators/withTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [withCssBaseline, withTheme];
