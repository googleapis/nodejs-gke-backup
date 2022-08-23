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

function main(restore) {
  // [START gkebackup_v1_generated_BackupForGKE_UpdateRestore_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A new version of the Restore resource that contains updated fields.
   *  This may be sparsely populated if an `update_mask` is provided.
   */
  // const restore = {}
  /**
   *  This is used to specify the fields to be overwritten in the
   *  Restore targeted for update. The values for each of these
   *  updated fields will be taken from the `restore` provided
   *  with this request. Field names are relative to the root of the resource.
   *  If no `update_mask` is provided, all fields in `restore` will be
   *  written to the target Restore resource.
   *  Note that OUTPUT_ONLY and IMMUTABLE fields in `restore` are ignored
   *  and are not used to update the target Restore.
   */
  // const updateMask = {}

  // Imports the Gkebackup library
  const {BackupForGKEClient} = require('@google-cloud/gke-backup').v1;

  // Instantiates a client
  const gkebackupClient = new BackupForGKEClient();

  async function callUpdateRestore() {
    // Construct request
    const request = {
      restore,
    };

    // Run request
    const [operation] = await gkebackupClient.updateRestore(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateRestore();
  // [END gkebackup_v1_generated_BackupForGKE_UpdateRestore_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
