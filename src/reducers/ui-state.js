// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {handleActions} from 'redux-actions';
import ActionTypes from 'constants/action-types';

import {
  INITIAL_UI_STATE,
  openDeleteModalUpdater,
  toggleModalUpdater,
  showExportDropdownUpdater,
  hideExportDropdownUpdater,
  toggleSidePanelUpdater,
  toggleMapControlUpdater,
  addNotificationUpdater,
  removeNotificationUpdater,

  // export image
  cleanupExportImage,
  setExportImageDataUri,
  setRatioUpdater,
  setResolutionUpdater,
  startExportingImage,
  toggleLegendUpdater,

  // export data
  setExportSelectedDatasetUpdater,
  setExportDataTypeUpdater,
  setExportFilteredUpdater,
  setExportDataUpdater,

  // export HTML
  setExportMapboxAccessTokenUpdater
} from './ui-state-updaters';

const actionHandler = {
  [ActionTypes.TOGGLE_SIDE_PANEL]: toggleSidePanelUpdater,
  [ActionTypes.TOGGLE_MODAL]: toggleModalUpdater,
  [ActionTypes.SHOW_EXPORT_DROPDOWN]: showExportDropdownUpdater,
  [ActionTypes.HIDE_EXPORT_DROPDOWN]: hideExportDropdownUpdater,
  [ActionTypes.OPEN_DELETE_MODAL]: openDeleteModalUpdater,
  [ActionTypes.TOGGLE_MAP_CONTROL]: toggleMapControlUpdater,
  [ActionTypes.ADD_NOTIFICATION]: addNotificationUpdater,
  [ActionTypes.REMOVE_NOTIFICATION]: removeNotificationUpdater,

  [ActionTypes.SET_RATIO]: setRatioUpdater,
  [ActionTypes.SET_RESOLUTION]: setResolutionUpdater,
  [ActionTypes.TOGGLE_LEGEND]: toggleLegendUpdater,
  [ActionTypes.START_EXPORTING_IMAGE]: startExportingImage,
  [ActionTypes.SET_EXPORT_IMAGE_DATA_URI]: setExportImageDataUri,
  [ActionTypes.CLEANUP_EXPORT_IMAGE]: cleanupExportImage,

  [ActionTypes.SET_EXPORT_SELECTED_DATASET]: setExportSelectedDatasetUpdater,
  [ActionTypes.SET_EXPORT_DATA_TYPE]: setExportDataTypeUpdater,
  [ActionTypes.SET_EXPORT_FILTERED]: setExportFilteredUpdater,
  [ActionTypes.SET_EXPORT_DATA]: setExportDataUpdater,

  [ActionTypes.SET_EXPORT_MAPBOX_ACCESS_TOKEN]: setExportMapboxAccessTokenUpdater
};

/* Reducer */
export const uiStateReducerFactory = (initialState = {}) =>
  handleActions(actionHandler, {...INITIAL_UI_STATE, ...initialState, initialState});

export default uiStateReducerFactory();
