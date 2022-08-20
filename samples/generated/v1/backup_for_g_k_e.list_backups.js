// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START gkebackup_v1_generated_BackupForGKE_ListBackups_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The BackupPlan that contains the Backups to list.
   *  Format: projects/* /locations/* /backupPlans/*
   */
  // const parent = 'abc123'
  /**
   *  The target number of results to return in a single response.
   *  If not specified, a default value will be chosen by the service.
   *  Note that the response may inclue a partial list and a caller should
   *  only rely on the response's
   *  next_page_token google.cloud.gkebackup.v1.ListBackupsResponse.next_page_token 
   *  to determine if there are more instances left to be queried.
   */
  // const pageSize = 1234
  /**
   *  The value of
   *  next_page_token google.cloud.gkebackup.v1.ListBackupsResponse.next_page_token 
   *  received from a previous `ListBackups` call.
   *  Provide this to retrieve the subsequent page in a multi-page list of
   *  results. When paginating, all other parameters provided to
   *  `ListBackups` must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Field match expression used to filter the results.
   */
  // const filter = 'abc123'
  /**
   *  Field by which to sort the results.
   */
  // const orderBy = 'abc123'

  // Imports the Gkebackup library
  const {BackupForGKEClient} = require('@google-cloud/gke-backup').v1;

  // Instantiates a client
  const gkebackupClient = new BackupForGKEClient();

  async function callListBackups() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await gkebackupClient.listBackupsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListBackups();
  // [END gkebackup_v1_generated_BackupForGKE_ListBackups_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
