/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable  */

/**
 * Example function that simulates requesting data asynchronously.
 * @returns {Promise<any>} promise that resolves with 'bar'.
 */
function requestSomething() {
  return new Promise(resolve => {
    setTimeout(resolve, 100, 'bar');
  })
}

/**
 * Example of the 'pre' function that returns a Promise.
 * @param context The current context of processing pipeline
 * @return {Promise} When resolved, continues the rendering pipeline
 */
function pre(context) {
  return requestSomething().then((value) => {
    context.content.foo = value;
  });
}

module.exports.pre = pre;
