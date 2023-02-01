/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export interface SecurityFlyoutPanel {
  /**
   * Unique key to identify the panel
   */
  id: string;
  /**
   * Any parameters necessary for the initial requests within the flyout
   */
  params?: Record<string, unknown>;
  /**
   * Tracks the path for what to show in a panel. We may have multiple tabs or details..., so easiest to just use a stack
   */
  path?: string[];
  /**
   * Tracks visual state such as whether the panel is collapsed
   */
  state?: Record<string, unknown>;
}
export interface RightPanel extends SecurityFlyoutPanel {
  id: 'right';
  params?: {
    id: string;
    indexName: string;
  };
}
export interface Right2Panel extends SecurityFlyoutPanel {
  id: 'right2';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface LeftPanel extends SecurityFlyoutPanel {
  id: 'left';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface Left2Panel extends SecurityFlyoutPanel {
  id: 'left2';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface PreviewPanel extends SecurityFlyoutPanel {
  id: 'preview';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface Preview2Panel extends SecurityFlyoutPanel {
  id: 'preview2';
  params?: {
    id: string;
    indexName: string;
  };
}
