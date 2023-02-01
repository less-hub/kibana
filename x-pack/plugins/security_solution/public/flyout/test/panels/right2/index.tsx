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
import type { Right2Panel } from '../../../../common/store/flyout/panel-model';

export const Right2DetailsPanelKey: Right2Panel['id'] = 'right2';

export const Right2DetailsPanel: React.FC<Right2Panel> = React.memo(() => {
  const {
    closePanels,
    closeRightPanel,
    openPanels,
    openLeftPanel,
    openPreviewPanel,
    openRightPanel,
  } = useExpandableFlyoutContext();

  return (
    <EuiFlexGroup direction="column" css={{ backgroundColor: '#07C', height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle>
          <h2>
            <FormattedMessage id="right2" defaultMessage="Test right2 panel" />
          </h2>
        </EuiTitle>
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
          <FormattedMessage id="right2.right" defaultMessage="Open right panel" />
        </EuiButton>
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
          <FormattedMessage id="right2.left" defaultMessage="Open left panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openLeftPanel({
              id: 'left2',
              params: {
                id: '',
                indexName: '',
              },
            })
          }
        >
          <FormattedMessage id="right2.left2" defaultMessage="Open left2 panel" />
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
          <FormattedMessage id="right2.preview" defaultMessage="Open preview panel" />
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
          <FormattedMessage id="right2.left" defaultMessage="Open preview2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              left: {
                id: 'left',
                params: {
                  id: '',
                  indexName: '',
                },
              },
              preview: {
                id: 'preview',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage
            id="right2.left-preview"
            defaultMessage="Open left and preview panels"
          />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closeRightPanel()}>
          <FormattedMessage id="right.close" defaultMessage="Close right panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closePanels()}>
          <FormattedMessage id="right2.close" defaultMessage="Close all panels" />
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

Right2DetailsPanel.displayName = 'Right2DetailsPanel';
