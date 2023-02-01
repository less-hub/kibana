/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type {
  Left2Panel,
  LeftPanel,
  Preview2Panel,
  PreviewPanel,
  Right2Panel,
  RightPanel,
} from './panel-model';

export type SecurityFlyoutPanel =
  | LeftPanel
  | Left2Panel
  | RightPanel
  | Right2Panel
  | PreviewPanel
  | Preview2Panel
  | Record<string | number, never>; // Empty object

export interface SecurityFlyoutLayout {
  left: SecurityFlyoutPanel;
  right: SecurityFlyoutPanel;
  preview: SecurityFlyoutPanel[];
}
