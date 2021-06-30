import * as contextMenu from 'electron-context-menu';

export default () => {
  contextMenu({
    showSearchWithGoogle: false,
    showCopyImage: false,
    prepend: (defaultActions, params, browserWindow) => [
      // menu
    ],
  });
};
