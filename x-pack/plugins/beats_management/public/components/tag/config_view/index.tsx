/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiFormRow,
  EuiHorizontalRule,
  EuiSelect,
  EuiTitle,
} from '@elastic/eui';
import { FormattedMessage, InjectedIntl, injectI18n } from '@kbn/i18n/react';
import React from 'react';
import { configBlockSchemas } from '../../../../common/config_schemas';
import { translateConfigSchema } from '../../../../common/config_schemas_translations_map';
import { ConfigurationBlock } from '../../../../common/domain_types';
import { ConfigForm } from './config_form';

interface ComponentProps {
  intl: InjectedIntl;
  configBlock?: ConfigurationBlock;
  onClose(): any;
  onSave?(config: ConfigurationBlock): any;
}

interface ComponentState {
  valid: boolean;
  configBlock: ConfigurationBlock;
}

class ConfigViewUi extends React.Component<ComponentProps, ComponentState> {
  private form = React.createRef<any>();
  private editMode: boolean;
  private schema = translateConfigSchema(configBlockSchemas);
  constructor(props: any) {
    super(props);
    this.editMode = props.configBlock !== undefined;

    this.state = {
      valid: false,
      configBlock: props.configBlock || {
        type: this.schema[0].id,
      },
    };
  }
  public onValueChange = (field: string) => (e: any) => {
    const value = e.currentTarget ? e.currentTarget.value : e;
    this.setState((state: any) => ({
      configBlock: {
        ...state.configBlock,
        [field]: value,
      },
    }));
  };
  public render() {
    const { intl } = this.props;
    const thisConfigSchema = this.schema.find(s => this.state.configBlock.type === s.id);

    if (!thisConfigSchema) {
      return (
        <FormattedMessage
          id="xpack.beatsManagement.tagConfig.invalidSchema"
          defaultMessage="Error: This config is invalid, it is not supported by Beats and should be removed"
        />
      );
    }
    return (
      <EuiFlyout onClose={this.props.onClose}>
        <EuiFlyoutHeader>
          <EuiTitle size="m">
            <h2>
              {this.editMode ? (
                this.props.onSave ? (
                  <FormattedMessage
                    id="xpack.beatsManagement.tagConfig.editConfigurationTitle"
                    defaultMessage="Edit configuration block"
                  />
                ) : (
                  <FormattedMessage
                    id="xpack.beatsManagement.tagConfig.viewConfigurationTitle"
                    defaultMessage="View configuration block"
                  />
                )
              ) : (
                <FormattedMessage
                  id="xpack.beatsManagement.tagConfig.addConfigurationTitle"
                  defaultMessage="Add configuration block"
                />
              )}
            </h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiFormRow
            label={
              <FormattedMessage
                id="xpack.beatsManagement.tagConfig.typeLabel"
                defaultMessage="Type"
              />
            }
          >
            <EuiSelect
              options={this.schema.map(s => ({ value: s.id, text: s.name }))}
              value={this.state.configBlock.type}
              disabled={this.editMode}
              onChange={this.onValueChange('type')}
            />
          </EuiFormRow>
          <EuiFormRow
            label={
              <FormattedMessage
                id="xpack.beatsManagement.tagConfig.descriptionLabel"
                defaultMessage="Description"
              />
            }
          >
            <EuiFieldText
              value={this.state.configBlock.description}
              disabled={!this.props.onSave}
              onChange={this.onValueChange('description')}
              placeholder={intl.formatMessage({
                id: 'xpack.beatsManagement.tagConfig.descriptionPlaceholder',
                defaultMessage: 'Description (optional)',
              })}
            />
          </EuiFormRow>
          <h3>
            <FormattedMessage
              id="xpack.beatsManagement.tagConfig.configurationTypeText"
              defaultMessage="{configType} configuration"
              values={{
                configType: thisConfigSchema ? thisConfigSchema.name : 'Unknown',
              }}
            />
          </h3>
          <EuiHorizontalRule />

          <ConfigForm
            onSubmit={
              this.props.onSave
                ? data => {
                    if (this.props.onSave) {
                      this.props.onSave({
                        ...this.state.configBlock,
                        config: data,
                      });
                    }
                    this.props.onClose();
                  }
                : undefined
            }
            canSubmit={canIt => this.setState({ valid: canIt })}
            ref={this.form}
            values={this.state.configBlock}
            id={thisConfigSchema ? thisConfigSchema.name : 'Undefined'}
            schema={thisConfigSchema}
          />
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty iconType="cross" onClick={this.props.onClose}>
                <FormattedMessage
                  id="xpack.beatsManagement.tagConfig.closeButtonLabel"
                  defaultMessage="Close"
                />
              </EuiButtonEmpty>
            </EuiFlexItem>
            {this.props.onSave && (
              <EuiFlexItem grow={false}>
                <EuiButton
                  disabled={!this.state.valid}
                  fill
                  onClick={() => {
                    if (this.form.current && this.form.current.getWrappedInstance()) {
                      this.form.current.getWrappedInstance().submit();
                    }
                  }}
                >
                  <FormattedMessage
                    id="xpack.beatsManagement.tagConfig.saveButtonLabel"
                    defaultMessage="Save"
                  />
                </EuiButton>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }
}

export const ConfigView = injectI18n(ConfigViewUi);
