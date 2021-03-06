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
 * Class representing a RepoInfo.
 */
class RepoInfo {
  /**
   * Create a RepoInfo.
   * @property {string} repoUrl The repository url
   * @property {string} [externalUserId] The external user ID
   */
  constructor() {
  }

  /**
   * Defines the metadata of RepoInfo
   *
   * @returns {object} metadata of RepoInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RepoInfo',
      type: {
        name: 'Composite',
        className: 'RepoInfo',
        modelProperties: {
          repoUrl: {
            required: true,
            serializedName: 'repo_url',
            type: {
              name: 'String'
            }
          },
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RepoInfo;
