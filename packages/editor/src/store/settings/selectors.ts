import { IState } from '../reducer'
import { getActiveSolution } from '../editor/selectors'
import { get as getHost } from '../host/selectors'
import { SETTINGS_SOLUTION_ID } from '../../constants'
import { getTheme } from '../../theme'

export const getIsOpen = (state: IState): boolean =>
  getActiveSolution(state).id === SETTINGS_SOLUTION_ID

export const get = (state: IState): ISettings => state.settings.values

export const getMonacoTheme = (state: IState): 'vs' | 'vs-dark' | 'hc-black' => {
  return {
    light: 'vs',
    dark: 'vs-dark',
    'high-contrast': 'hc-black',
  }[state.settings.values.editor.theme]
}

export const getPrettyEditorTheme = (state: IState): string => {
  return {
    light: 'Light',
    dark: 'Dark',
    'high-contrast': 'High Contrast',
  }[state.settings.values.editor.theme]
}

export const getBackgroundColor = (state: IState): string => {
  const host = getHost(state)
  const theme = getTheme(host)
  return {
    light: theme.white,
    dark: theme.neutralDarker,
    'high-contrast': theme.black,
  }[state.settings.values.editor.theme]
}

export const getFontSize = (state: IState): number =>
  state.settings.values.editor.font.size
export const getFontFamily = (state: IState): string =>
  state.settings.values.editor.font.family
export const getLineHeight = (state: IState): number =>
  state.settings.values.editor.font.lineHeight

export const getIsMinimapEnabled = (state: IState): boolean =>
  state.settings.values.editor.minimap
export const getIsFoldingEnabled = (state: IState): boolean =>
  state.settings.values.editor.folding
export const getIsPrettierEnabled = (state: IState): boolean =>
  state.settings.values.editor.prettier

export const getTabSize = (state: IState): number => state.settings.values.editor.tabSize

export const getWordWrap = (state: IState): 'on' | 'off' | 'bounded' | 'wordWrapColumn' =>
  state.settings.values.editor.wordWrap
export const getWordWrapColumn = (state: IState): number =>
  state.settings.values.editor.wordWrapColumn
