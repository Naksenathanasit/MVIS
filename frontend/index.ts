import { registerRootComponent } from 'expo';

import App from './src/App';
import StorybookUI from './storybook';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent((process.env.__RUN__ == "storybook" ? StorybookUI : App) as React.FC);