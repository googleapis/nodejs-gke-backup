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

function main(parent, restore, restoreId) {
  // [START gkebackup_v1_generated_BackupForGKE_CreateRestore_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The RestorePlan within which to create the Restore.
   *  Format: projects/* /locations/* /restorePlans/*
   */
  // const parent = 'abc123'
  /**
   *  Required. The restore resource to create.
   */
  // const restore = {}
  /**
   *  Required. The client-provided short name for the Restore resource.
   *  This name must:
   *   - be between 1 and 63 characters long (inclusive)
   *   - consist of only lower-case ASCII letters, numbers, and dashes
   *   - start with a lower-case letter
   *   - end with a lower-case letter or number
   *   - be unique within the set of Restores in this RestorePlan.
   */
  // const restoreId = 'abc123'

  // Imports the Gkebackup library
  const {BackupForGKEClient} = require('@google-cloud/gkebackup').v1;

  // Instantiates a client
  const gkebackupClient = new BackupForGKEClient();

  async function callCreateRestore() {
    // Construct request
    const request = {
      parent,
      restore,
      restoreId,
    };

    // Run request
    const [operation] = await gkebackupClient.createRestore(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateRestore();
  // [END gkebackup_v1_generated_BackupForGKE_CreateRestore_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
