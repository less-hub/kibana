/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiTitle } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import { useExpandableFlyoutContext } from '../../../context';
import type { Left2Panel } from '../../../../common/store/flyout/panel-model';

export const Left2DetailsPanelKey: Left2Panel['id'] = 'left2';

export const Left2DetailsPanel: React.FC<Left2Panel> = React.memo(() => {
  const { closePanels, closeLeftPanel, openPreviewPanel, openLeftPanel, openRightPanel } =
    useExpandableFlyoutContext();

  return (
    <EuiFlexGroup direction="column" css={{ backgroundColor: '#F04E98', height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle>
          <h2>
            <FormattedMessage id="left2" defaultMessage="Test left2 panel" />
          </h2>
        </EuiTitle>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openLeftPanel({
              id: 'left',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="left2.left" defaultMessage="Open left panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openRightPanel({
              id: 'right',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="left2.right" defaultMessage="Open right panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openRightPanel({
              id: 'right2',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="left2.right2" defaultMessage="Open right2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPreviewPanel({
              id: 'preview',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="left2.preview" defaultMessage="Open preview panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPreviewPanel({
              id: 'preview2',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="left2.left" defaultMessage="Open preview2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closeLeftPanel()}>
          <FormattedMessage id="left.close" defaultMessage="Close left panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closePanels()}>
          <FormattedMessage id="left2.close" defaultMessage="Close all panels" />
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

Left2DetailsPanel.displayName = 'Left2DetailsPanel';
