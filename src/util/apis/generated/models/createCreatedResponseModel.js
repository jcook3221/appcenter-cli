/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * ExternalStoreResponse
 *
 */
class CreateCreatedResponseModel {
  /**
   * Create a CreateCreatedResponseModel.
   * @property {string} [id] Store id
   * @property {string} [name] Store Name
   * @property {string} [type] Store Type
   * @property {string} [track] Store track. Possible values include:
   * 'production', 'alpha', 'beta', 'testflight-internal',
   * 'testflight-external'
   * @property {object} [intuneDetails] Store details for intune
   * @property {object} [intuneDetails.targetAudience]
   * @property {string} [intuneDetails.targetAudience.name] display name for
   * the target audience/group
   * @property {string} [intuneDetails.targetAudience.id] ID for the target
   * audience/group.
   * @property {object} [intuneDetails.appCategory]
   * @property {string} [intuneDetails.appCategory.name] display name for the
   * app category
   * @property {string} [intuneDetails.appCategory.id] ID for the category.
   * @property {string} [serviceConnectionId] Id for the shared service
   * connection. In case of Apple / GooglePlay stores, this connection will be
   * used to connect to the Apple / Google stores in App Center.
   * @property {string} [createdBy] The ID of the principal that created the
   * store.
   * @property {string} [createdByPrincipalType] The type of the principal that
   * created the store.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateCreatedResponseModel
   *
   * @returns {object} metadata of CreateCreatedResponseModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateCreatedResponse',
      type: {
        name: 'Composite',
        className: 'CreateCreatedResponseModel',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          track: {
            required: false,
            serializedName: 'track',
            type: {
              name: 'String'
            }
          },
          intuneDetails: {
            required: false,
            serializedName: 'intune_details',
            type: {
              name: 'Composite',
              className: 'CreateCreatedResponseIntuneDetails'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          },
          createdBy: {
            required: false,
            serializedName: 'created_by',
            type: {
              name: 'String'
            }
          },
          createdByPrincipalType: {
            required: false,
            serializedName: 'created_by_principal_type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateCreatedResponseModel;
