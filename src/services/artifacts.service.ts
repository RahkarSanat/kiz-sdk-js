import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import {
  Artifact,
  ArtifactMetadata,
  CountQueryMethodsInput,
  QueryMethodsInput,
  ArtifactModel,
  OneFilter,
  Items,
} from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT } from '../common/infrastructure';

export class ArtifactsService extends RequestService<ArtifactModel, Artifact> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  /**
   * This is an async function that returns the count of a specific type of artifact based on a filter
   * and authorization header.
   * @param {string} type - A string parameter that specifies the type of artifact to count.
   * @param  {QueryMethodsInput<ArtifactModel>} { filter, config } - optional filter & config.
   * @returns The `count` method is returning an `AxiosPromise` of type `number`.
   */
  public async count(
    type: string,
    { filter, config }: CountQueryMethodsInput<ArtifactModel>,
  ): AxiosPromise<number> {
    return this.get<number>(`${this.path}/${type}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is an asynchronous function that creates an artifact with a given type and model, and returns
   * a promise that resolves to the created artifact.
   * @param {string} type - A string representing the type of artifact to be created.
   * @param {ArtifactModel} model - The `model` parameter is an object of type `ArtifactModel` which
   * contains the data to be sent in the request body. It is used to create a new `Artifact` object.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `create` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async create(
    type: string,
    model: ArtifactModel,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.post(
      { url: `${this.path}/${type}`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  /**
   * This is an asynchronous function that finds artifacts based on a given type and query parameters.
   * @param {string} type - The type parameter is a string that represents the type of artifact being
   * searched for. It is used in the URL path to specify the endpoint for the API call.
   * @param  {QueryMethodsInput<ArtifactModel>} { filter, config } - optional filter & config.
   * @returns The `find` method is returning an AxiosPromise that resolves to an object of type
   * `Items<Artifact>`.
   */
  public async find(
    type: string,
    { filter, config }: QueryMethodsInput<ArtifactModel>,
  ): AxiosPromise<Items<Artifact>> {
    return this.get<Items<Artifact>>(`${this.path}/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is a TypeScript function that finds an artifact by its ID and returns a promise with an Axios
   * response.
   * @param {string} type - The type of artifact to find, which is a string value.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * artifact that needs to be retrieved.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `findById` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async findById(
    type: string,
    id: string,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.get(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is an asynchronous function that finds one artifact based on a given filter and type, with an
   * optional Axios request configuration.
   * @param {string} type - The type of artifact to search for. It is a string parameter.
   * @param filter - The `filter` parameter is an object that specifies the criteria for filtering the
   * results of the query. It is of type `OneFilter<Artifact>`, which means it is a generic type that
   * takes an `Artifact` type as its parameter. The `findOne` method will return a single `Artifact
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `findOne` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async findOne(
    type: string,
    filter: OneFilter<ArtifactModel>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.get(`${this.path}/one/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is an async function that updates an artifact by its ID using a PATCH request with optional
   * Axios request configuration.
   * @param {string} type - a string representing the type of artifact to update.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * artifact that needs to be updated.
   * @param {ArtifactModel} model - The `model` parameter is an object of type `ArtifactModel` which
   * contains the updated data for the artifact that needs to be updated.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns an AxiosPromise of type Artifact.
   */
  public async updateById(
    type: string,
    id: string,
    model: ArtifactModel,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.patch(`${this.path}/${type}/${id}`, model, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is an async function that updates a single artifact model based on a filter and returns a
   * promise with the updated artifact.
   * @param {ArtifactModel} model - The data object that contains the updated values for the artifact.
   * @param filter - The `filter` parameter is of type `OneFilter<Artifact>`. It is used to specify the
   * filter criteria for the update operation. It is passed as a query parameter in the HTTP request. The
   * `OneFilter` type is a generic type that specifies the type of the document being filtered.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns an AxiosPromise of type Artifact.
   */
  public async updateOne(
    model: ArtifactModel,
    filter: OneFilter<ArtifactModel>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.patch(`${this.path}/one`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is a TypeScript function that deletes an artifact by its ID with optional Axios request
   * configuration.
   * @param {string} type - The type of artifact to be deleted.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * artifact that needs to be deleted.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `deleteById` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async deleteById(
    type: string,
    id: string,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.delete(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This function deletes one artifact based on a filter and returns a promise with the deleted
   * artifact.
   * @param {string} type - The type of artifact to delete. It is a string parameter.
   * @param filter - The `filter` parameter is an object that specifies the criteria for selecting a
   * single document from a collection. It is of type `OneFilter<ArtifactModel>`, which means it is a
   * generic type that takes `ArtifactModel` as its type argument. The `OneFilter` type is defined
   * elsewhere
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `deleteOne` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async deleteOne(
    type: string,
    filter: OneFilter<ArtifactModel>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.delete(`${this.path}/${type}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is a TypeScript function that restores an artifact by its ID using a PUT request with optional
   * Axios request configuration.
   * @param {string} type - a string parameter that represents the type of artifact to be restored.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * artifact that needs to be restored.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `restoreById` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async restoreById(
    type: string,
    id: string,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.put(
      { url: `${this.path}/${type}/${id}/restore` },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  /**
   * This is a TypeScript function that restores a single artifact based on a filter and authorization
   * token.
   * @param {string} type - The type of artifact to be restored. It is a string parameter.
   * @param filter - The `filter` parameter is an object of type `OneFilter<ArtifactModel>`. It is used
   * to filter the artifacts that need to be restored. The specific properties of this object depend on
   * the implementation of the `OneFilter` interface.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns an AxiosPromise of type Artifact.
   */
  public async restoreOne(
    type: string,
    filter: OneFilter<ArtifactModel>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.put(
      { url: `${this.path}/${type}/restore` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  /**
   * This is an async function that updates multiple artifacts of a certain type using a patch request
   * with a filter and authorization header.
   * @param {string} type - The type of the artifact being updated in bulk (e.g. "users", "products",
   * etc.).
   * @param {ArtifactModel} entity - The `entity` parameter is an object of type `ArtifactModel` which
   * contains the data to be updated in bulk.
   * @param  {QueryMethodsInput<Artifact>} { filter, config } - optional filter & config.
   * @returns An AxiosPromise of type number is being returned.
   */
  public async updateBulk(
    type: string,
    entity: ArtifactModel,
    { filter, config }: CountQueryMethodsInput<Artifact>,
  ): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/${type}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This function updates metadata for an artifact by its identity using a patch request.
   * @param {string} type - A string parameter representing the type of artifact for which metadata needs
   * to be updated.
   * @param {string} identity - The `identity` parameter is a string that represents the unique
   * identifier of an artifact. It is used in the URL path to specify which artifact's metadata should be
   * updated.
   * @param {ArtifactMetadata} metadata - The `metadata` parameter is an object of type
   * `ArtifactMetadata` that contains the metadata to be updated for the artifact identified by
   * `identity` and `type`. This metadata could include information such as the artifact's name,
   * description, or any other relevant information.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns an AxiosPromise of type Artifact.
   */
  public async updateMetadataByIdentity(
    type: string,
    identity: string,
    metadata: ArtifactMetadata,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact> {
    return this.patch(`${this.path}/${type}/${identity}/metadata`, metadata, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
