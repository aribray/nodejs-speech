// Copyright 2021 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as speechModule from '../src';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubBidiStreamingCall<ResponseType>(response?: ResponseType, error?: Error) {
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    return sinon.stub().returns(mockStream);
}

function stubLongRunningCall<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().rejects(callError) : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().callsArgWith(2, callError) : sinon.stub().callsArgWith(2, null, mockOperation);
}

describe('v1.SpeechClient', () => {
    it('has servicePath', () => {
        const servicePath = speechModule.v1.SpeechClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = speechModule.v1.SpeechClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = speechModule.v1.SpeechClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new speechModule.v1.SpeechClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new speechModule.v1.SpeechClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.speechStub, undefined);
        await client.initialize();
        assert(client.speechStub);
    });

    it('has close method', () => {
        const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('recognize', () => {
        it('invokes recognize without error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.RecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.speech.v1.RecognizeResponse());
            client.innerApiCalls.recognize = stubSimpleCall(expectedResponse);
            const [response] = await client.recognize(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.recognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes recognize without error using callback', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.RecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.speech.v1.RecognizeResponse());
            client.innerApiCalls.recognize = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.recognize(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.speech.v1.IRecognizeResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.recognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes recognize with error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.RecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.recognize = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.recognize(request), expectedError);
            assert((client.innerApiCalls.recognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('longRunningRecognize', () => {
        it('invokes longRunningRecognize without error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.LongRunningRecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.longRunningRecognize = stubLongRunningCall(expectedResponse);
            const [operation] = await client.longRunningRecognize(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.longRunningRecognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes longRunningRecognize without error using callback', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.LongRunningRecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.longRunningRecognize = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.longRunningRecognize(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.cloud.speech.v1.ILongRunningRecognizeResponse, protos.google.cloud.speech.v1.ILongRunningRecognizeMetadata>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.cloud.speech.v1.ILongRunningRecognizeResponse, protos.google.cloud.speech.v1.ILongRunningRecognizeMetadata>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.longRunningRecognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes longRunningRecognize with call error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.LongRunningRecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.longRunningRecognize = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.longRunningRecognize(request), expectedError);
            assert((client.innerApiCalls.longRunningRecognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes longRunningRecognize with LRO error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.LongRunningRecognizeRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.longRunningRecognize = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.longRunningRecognize(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.longRunningRecognize as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkLongRunningRecognizeProgress without error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkLongRunningRecognizeProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkLongRunningRecognizeProgress with error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkLongRunningRecognizeProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('streamingRecognize', () => {
        it('invokes streamingRecognize without error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.StreamingRecognizeRequest());
            const expectedResponse = generateSampleMessage(new protos.google.cloud.speech.v1.StreamingRecognizeResponse());
            client.innerApiCalls.streamingRecognize = stubBidiStreamingCall(expectedResponse);
            const stream = client.streamingRecognize();
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.cloud.speech.v1.StreamingRecognizeResponse) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
                stream.write(request);
                stream.end();
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.streamingRecognize as SinonStub)
                .getCall(0).calledWithExactly(undefined));
            assert.deepStrictEqual(((stream as unknown as PassThrough)
                ._transform as SinonStub).getCall(0).args[0], request);
        });

        it('invokes streamingRecognize with error', async () => {
            const client = new speechModule.v1.SpeechClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.speech.v1.StreamingRecognizeRequest());const expectedError = new Error('expected');
            client.innerApiCalls.streamingRecognize = stubBidiStreamingCall(undefined, expectedError);
            const stream = client.streamingRecognize();
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.cloud.speech.v1.StreamingRecognizeResponse) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
                stream.write(request);
                stream.end();
            });
            await assert.rejects(promise, expectedError);
            assert((client.innerApiCalls.streamingRecognize as SinonStub)
                .getCall(0).calledWithExactly(undefined));
            assert.deepStrictEqual(((stream as unknown as PassThrough)
                ._transform as SinonStub).getCall(0).args[0], request);
        });
    });

    describe('Path templates', () => {

        describe('customClass', () => {
            const fakePath = "/rendered/path/customClass";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                custom_class: "customClassValue",
            };
            const client = new speechModule.v1.SpeechClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.customClassPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.customClassPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('customClassPath', () => {
                const result = client.customClassPath("projectValue", "locationValue", "customClassValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.customClassPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromCustomClassName', () => {
                const result = client.matchProjectFromCustomClassName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.customClassPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromCustomClassName', () => {
                const result = client.matchLocationFromCustomClassName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.customClassPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchCustomClassFromCustomClassName', () => {
                const result = client.matchCustomClassFromCustomClassName(fakePath);
                assert.strictEqual(result, "customClassValue");
                assert((client.pathTemplates.customClassPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('phraseSet', () => {
            const fakePath = "/rendered/path/phraseSet";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                phrase_set: "phraseSetValue",
            };
            const client = new speechModule.v1.SpeechClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.phraseSetPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.phraseSetPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('phraseSetPath', () => {
                const result = client.phraseSetPath("projectValue", "locationValue", "phraseSetValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.phraseSetPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromPhraseSetName', () => {
                const result = client.matchProjectFromPhraseSetName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.phraseSetPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromPhraseSetName', () => {
                const result = client.matchLocationFromPhraseSetName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.phraseSetPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchPhraseSetFromPhraseSetName', () => {
                const result = client.matchPhraseSetFromPhraseSetName(fakePath);
                assert.strictEqual(result, "phraseSetValue");
                assert((client.pathTemplates.phraseSetPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
