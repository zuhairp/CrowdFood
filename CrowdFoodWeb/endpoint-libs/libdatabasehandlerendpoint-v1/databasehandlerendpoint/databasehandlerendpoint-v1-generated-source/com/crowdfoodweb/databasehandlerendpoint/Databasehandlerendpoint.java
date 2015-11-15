/*
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
/*
 * This code was generated by https://code.google.com/p/google-apis-client-generator/
 * (build: 2015-08-03 17:34:38 UTC)
 * on 2015-11-15 at 22:19:42 UTC 
 * Modify at your own risk.
 */

package com.crowdfoodweb.databasehandlerendpoint;

/**
 * Service definition for Databasehandlerendpoint (v1).
 *
 * <p>
 * This is an API
 * </p>
 *
 * <p>
 * For more information about this service, see the
 * <a href="" target="_blank">API Documentation</a>
 * </p>
 *
 * <p>
 * This service uses {@link DatabasehandlerendpointRequestInitializer} to initialize global parameters via its
 * {@link Builder}.
 * </p>
 *
 * @since 1.3
 * @author Google, Inc.
 */
@SuppressWarnings("javadoc")
public class Databasehandlerendpoint extends com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient {

  // Note: Leave this static initializer at the top of the file.
  static {
    com.google.api.client.util.Preconditions.checkState(
        com.google.api.client.googleapis.GoogleUtils.MAJOR_VERSION == 1 &&
        com.google.api.client.googleapis.GoogleUtils.MINOR_VERSION >= 15,
        "You are currently running with version %s of google-api-client. " +
        "You need at least version 1.15 of google-api-client to run version " +
        "1.18.0-rc of the databasehandlerendpoint library.", com.google.api.client.googleapis.GoogleUtils.VERSION);
  }

  /**
   * The default encoded root URL of the service. This is determined when the library is generated
   * and normally should not be changed.
   *
   * @since 1.7
   */
  public static final String DEFAULT_ROOT_URL = "https://crowdfood-1109.appspot.com/_ah/api/";

  /**
   * The default encoded service path of the service. This is determined when the library is
   * generated and normally should not be changed.
   *
   * @since 1.7
   */
  public static final String DEFAULT_SERVICE_PATH = "databasehandlerendpoint/v1/";

  /**
   * The default encoded base URL of the service. This is determined when the library is generated
   * and normally should not be changed.
   */
  public static final String DEFAULT_BASE_URL = DEFAULT_ROOT_URL + DEFAULT_SERVICE_PATH;

  /**
   * Constructor.
   *
   * <p>
   * Use {@link Builder} if you need to specify any of the optional parameters.
   * </p>
   *
   * @param transport HTTP transport, which should normally be:
   *        <ul>
   *        <li>Google App Engine:
   *        {@code com.google.api.client.extensions.appengine.http.UrlFetchTransport}</li>
   *        <li>Android: {@code newCompatibleTransport} from
   *        {@code com.google.api.client.extensions.android.http.AndroidHttp}</li>
   *        <li>Java: {@link com.google.api.client.googleapis.javanet.GoogleNetHttpTransport#newTrustedTransport()}
   *        </li>
   *        </ul>
   * @param jsonFactory JSON factory, which may be:
   *        <ul>
   *        <li>Jackson: {@code com.google.api.client.json.jackson2.JacksonFactory}</li>
   *        <li>Google GSON: {@code com.google.api.client.json.gson.GsonFactory}</li>
   *        <li>Android Honeycomb or higher:
   *        {@code com.google.api.client.extensions.android.json.AndroidJsonFactory}</li>
   *        </ul>
   * @param httpRequestInitializer HTTP request initializer or {@code null} for none
   * @since 1.7
   */
  public Databasehandlerendpoint(com.google.api.client.http.HttpTransport transport, com.google.api.client.json.JsonFactory jsonFactory,
      com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
    this(new Builder(transport, jsonFactory, httpRequestInitializer));
  }

  /**
   * @param builder builder
   */
  Databasehandlerendpoint(Builder builder) {
    super(builder);
  }

  @Override
  protected void initialize(com.google.api.client.googleapis.services.AbstractGoogleClientRequest<?> httpClientRequest) throws java.io.IOException {
    super.initialize(httpClientRequest);
  }

  /**
   * Create a request for the method "getDatabaseHandler".
   *
   * This request holds the parameters needed by the databasehandlerendpoint server.  After setting
   * any optional parameters, call the {@link GetDatabaseHandler#execute()} method to invoke the
   * remote operation.
   *
   * @param id
   * @return the request
   */
  public GetDatabaseHandler getDatabaseHandler(java.lang.String id) throws java.io.IOException {
    GetDatabaseHandler result = new GetDatabaseHandler(id);
    initialize(result);
    return result;
  }

  public class GetDatabaseHandler extends DatabasehandlerendpointRequest<com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler> {

    private static final String REST_PATH = "databasehandler/{id}";

    /**
     * Create a request for the method "getDatabaseHandler".
     *
     * This request holds the parameters needed by the the databasehandlerendpoint server.  After
     * setting any optional parameters, call the {@link GetDatabaseHandler#execute()} method to invoke
     * the remote operation. <p> {@link GetDatabaseHandler#initialize(com.google.api.client.googleapis
     * .services.AbstractGoogleClientRequest)} must be called to initialize this instance immediately
     * after invoking the constructor. </p>
     *
     * @param id
     * @since 1.13
     */
    protected GetDatabaseHandler(java.lang.String id) {
      super(Databasehandlerendpoint.this, "GET", REST_PATH, null, com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler.class);
      this.id = com.google.api.client.util.Preconditions.checkNotNull(id, "Required parameter id must be specified.");
    }

    @Override
    public com.google.api.client.http.HttpResponse executeUsingHead() throws java.io.IOException {
      return super.executeUsingHead();
    }

    @Override
    public com.google.api.client.http.HttpRequest buildHttpRequestUsingHead() throws java.io.IOException {
      return super.buildHttpRequestUsingHead();
    }

    @Override
    public GetDatabaseHandler setAlt(java.lang.String alt) {
      return (GetDatabaseHandler) super.setAlt(alt);
    }

    @Override
    public GetDatabaseHandler setFields(java.lang.String fields) {
      return (GetDatabaseHandler) super.setFields(fields);
    }

    @Override
    public GetDatabaseHandler setKey(java.lang.String key) {
      return (GetDatabaseHandler) super.setKey(key);
    }

    @Override
    public GetDatabaseHandler setOauthToken(java.lang.String oauthToken) {
      return (GetDatabaseHandler) super.setOauthToken(oauthToken);
    }

    @Override
    public GetDatabaseHandler setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (GetDatabaseHandler) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public GetDatabaseHandler setQuotaUser(java.lang.String quotaUser) {
      return (GetDatabaseHandler) super.setQuotaUser(quotaUser);
    }

    @Override
    public GetDatabaseHandler setUserIp(java.lang.String userIp) {
      return (GetDatabaseHandler) super.setUserIp(userIp);
    }

    @com.google.api.client.util.Key
    private java.lang.String id;

    /**

     */
    public java.lang.String getId() {
      return id;
    }

    public GetDatabaseHandler setId(java.lang.String id) {
      this.id = id;
      return this;
    }

    @Override
    public GetDatabaseHandler set(String parameterName, Object value) {
      return (GetDatabaseHandler) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "insertDatabaseHandler".
   *
   * This request holds the parameters needed by the databasehandlerendpoint server.  After setting
   * any optional parameters, call the {@link InsertDatabaseHandler#execute()} method to invoke the
   * remote operation.
   *
   * @param content the {@link com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler}
   * @return the request
   */
  public InsertDatabaseHandler insertDatabaseHandler(com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler content) throws java.io.IOException {
    InsertDatabaseHandler result = new InsertDatabaseHandler(content);
    initialize(result);
    return result;
  }

  public class InsertDatabaseHandler extends DatabasehandlerendpointRequest<com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler> {

    private static final String REST_PATH = "databasehandler";

    /**
     * Create a request for the method "insertDatabaseHandler".
     *
     * This request holds the parameters needed by the the databasehandlerendpoint server.  After
     * setting any optional parameters, call the {@link InsertDatabaseHandler#execute()} method to
     * invoke the remote operation. <p> {@link InsertDatabaseHandler#initialize(com.google.api.client.
     * googleapis.services.AbstractGoogleClientRequest)} must be called to initialize this instance
     * immediately after invoking the constructor. </p>
     *
     * @param content the {@link com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler}
     * @since 1.13
     */
    protected InsertDatabaseHandler(com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler content) {
      super(Databasehandlerendpoint.this, "POST", REST_PATH, content, com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler.class);
    }

    @Override
    public InsertDatabaseHandler setAlt(java.lang.String alt) {
      return (InsertDatabaseHandler) super.setAlt(alt);
    }

    @Override
    public InsertDatabaseHandler setFields(java.lang.String fields) {
      return (InsertDatabaseHandler) super.setFields(fields);
    }

    @Override
    public InsertDatabaseHandler setKey(java.lang.String key) {
      return (InsertDatabaseHandler) super.setKey(key);
    }

    @Override
    public InsertDatabaseHandler setOauthToken(java.lang.String oauthToken) {
      return (InsertDatabaseHandler) super.setOauthToken(oauthToken);
    }

    @Override
    public InsertDatabaseHandler setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (InsertDatabaseHandler) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public InsertDatabaseHandler setQuotaUser(java.lang.String quotaUser) {
      return (InsertDatabaseHandler) super.setQuotaUser(quotaUser);
    }

    @Override
    public InsertDatabaseHandler setUserIp(java.lang.String userIp) {
      return (InsertDatabaseHandler) super.setUserIp(userIp);
    }

    @Override
    public InsertDatabaseHandler set(String parameterName, Object value) {
      return (InsertDatabaseHandler) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "listDatabaseHandler".
   *
   * This request holds the parameters needed by the databasehandlerendpoint server.  After setting
   * any optional parameters, call the {@link ListDatabaseHandler#execute()} method to invoke the
   * remote operation.
   *
   * @return the request
   */
  public ListDatabaseHandler listDatabaseHandler() throws java.io.IOException {
    ListDatabaseHandler result = new ListDatabaseHandler();
    initialize(result);
    return result;
  }

  public class ListDatabaseHandler extends DatabasehandlerendpointRequest<com.crowdfoodweb.databasehandlerendpoint.model.CollectionResponseDatabaseHandler> {

    private static final String REST_PATH = "databasehandler";

    /**
     * Create a request for the method "listDatabaseHandler".
     *
     * This request holds the parameters needed by the the databasehandlerendpoint server.  After
     * setting any optional parameters, call the {@link ListDatabaseHandler#execute()} method to
     * invoke the remote operation. <p> {@link ListDatabaseHandler#initialize(com.google.api.client.go
     * ogleapis.services.AbstractGoogleClientRequest)} must be called to initialize this instance
     * immediately after invoking the constructor. </p>
     *
     * @since 1.13
     */
    protected ListDatabaseHandler() {
      super(Databasehandlerendpoint.this, "GET", REST_PATH, null, com.crowdfoodweb.databasehandlerendpoint.model.CollectionResponseDatabaseHandler.class);
    }

    @Override
    public com.google.api.client.http.HttpResponse executeUsingHead() throws java.io.IOException {
      return super.executeUsingHead();
    }

    @Override
    public com.google.api.client.http.HttpRequest buildHttpRequestUsingHead() throws java.io.IOException {
      return super.buildHttpRequestUsingHead();
    }

    @Override
    public ListDatabaseHandler setAlt(java.lang.String alt) {
      return (ListDatabaseHandler) super.setAlt(alt);
    }

    @Override
    public ListDatabaseHandler setFields(java.lang.String fields) {
      return (ListDatabaseHandler) super.setFields(fields);
    }

    @Override
    public ListDatabaseHandler setKey(java.lang.String key) {
      return (ListDatabaseHandler) super.setKey(key);
    }

    @Override
    public ListDatabaseHandler setOauthToken(java.lang.String oauthToken) {
      return (ListDatabaseHandler) super.setOauthToken(oauthToken);
    }

    @Override
    public ListDatabaseHandler setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (ListDatabaseHandler) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public ListDatabaseHandler setQuotaUser(java.lang.String quotaUser) {
      return (ListDatabaseHandler) super.setQuotaUser(quotaUser);
    }

    @Override
    public ListDatabaseHandler setUserIp(java.lang.String userIp) {
      return (ListDatabaseHandler) super.setUserIp(userIp);
    }

    @com.google.api.client.util.Key
    private java.lang.String cursor;

    /**

     */
    public java.lang.String getCursor() {
      return cursor;
    }

    public ListDatabaseHandler setCursor(java.lang.String cursor) {
      this.cursor = cursor;
      return this;
    }

    @com.google.api.client.util.Key
    private java.lang.Integer limit;

    /**

     */
    public java.lang.Integer getLimit() {
      return limit;
    }

    public ListDatabaseHandler setLimit(java.lang.Integer limit) {
      this.limit = limit;
      return this;
    }

    @Override
    public ListDatabaseHandler set(String parameterName, Object value) {
      return (ListDatabaseHandler) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "removeDatabaseHandler".
   *
   * This request holds the parameters needed by the databasehandlerendpoint server.  After setting
   * any optional parameters, call the {@link RemoveDatabaseHandler#execute()} method to invoke the
   * remote operation.
   *
   * @param id
   * @return the request
   */
  public RemoveDatabaseHandler removeDatabaseHandler(java.lang.String id) throws java.io.IOException {
    RemoveDatabaseHandler result = new RemoveDatabaseHandler(id);
    initialize(result);
    return result;
  }

  public class RemoveDatabaseHandler extends DatabasehandlerendpointRequest<Void> {

    private static final String REST_PATH = "databasehandler/{id}";

    /**
     * Create a request for the method "removeDatabaseHandler".
     *
     * This request holds the parameters needed by the the databasehandlerendpoint server.  After
     * setting any optional parameters, call the {@link RemoveDatabaseHandler#execute()} method to
     * invoke the remote operation. <p> {@link RemoveDatabaseHandler#initialize(com.google.api.client.
     * googleapis.services.AbstractGoogleClientRequest)} must be called to initialize this instance
     * immediately after invoking the constructor. </p>
     *
     * @param id
     * @since 1.13
     */
    protected RemoveDatabaseHandler(java.lang.String id) {
      super(Databasehandlerendpoint.this, "DELETE", REST_PATH, null, Void.class);
      this.id = com.google.api.client.util.Preconditions.checkNotNull(id, "Required parameter id must be specified.");
    }

    @Override
    public RemoveDatabaseHandler setAlt(java.lang.String alt) {
      return (RemoveDatabaseHandler) super.setAlt(alt);
    }

    @Override
    public RemoveDatabaseHandler setFields(java.lang.String fields) {
      return (RemoveDatabaseHandler) super.setFields(fields);
    }

    @Override
    public RemoveDatabaseHandler setKey(java.lang.String key) {
      return (RemoveDatabaseHandler) super.setKey(key);
    }

    @Override
    public RemoveDatabaseHandler setOauthToken(java.lang.String oauthToken) {
      return (RemoveDatabaseHandler) super.setOauthToken(oauthToken);
    }

    @Override
    public RemoveDatabaseHandler setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (RemoveDatabaseHandler) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public RemoveDatabaseHandler setQuotaUser(java.lang.String quotaUser) {
      return (RemoveDatabaseHandler) super.setQuotaUser(quotaUser);
    }

    @Override
    public RemoveDatabaseHandler setUserIp(java.lang.String userIp) {
      return (RemoveDatabaseHandler) super.setUserIp(userIp);
    }

    @com.google.api.client.util.Key
    private java.lang.String id;

    /**

     */
    public java.lang.String getId() {
      return id;
    }

    public RemoveDatabaseHandler setId(java.lang.String id) {
      this.id = id;
      return this;
    }

    @Override
    public RemoveDatabaseHandler set(String parameterName, Object value) {
      return (RemoveDatabaseHandler) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "updateDatabaseHandler".
   *
   * This request holds the parameters needed by the databasehandlerendpoint server.  After setting
   * any optional parameters, call the {@link UpdateDatabaseHandler#execute()} method to invoke the
   * remote operation.
   *
   * @param content the {@link com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler}
   * @return the request
   */
  public UpdateDatabaseHandler updateDatabaseHandler(com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler content) throws java.io.IOException {
    UpdateDatabaseHandler result = new UpdateDatabaseHandler(content);
    initialize(result);
    return result;
  }

  public class UpdateDatabaseHandler extends DatabasehandlerendpointRequest<com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler> {

    private static final String REST_PATH = "databasehandler";

    /**
     * Create a request for the method "updateDatabaseHandler".
     *
     * This request holds the parameters needed by the the databasehandlerendpoint server.  After
     * setting any optional parameters, call the {@link UpdateDatabaseHandler#execute()} method to
     * invoke the remote operation. <p> {@link UpdateDatabaseHandler#initialize(com.google.api.client.
     * googleapis.services.AbstractGoogleClientRequest)} must be called to initialize this instance
     * immediately after invoking the constructor. </p>
     *
     * @param content the {@link com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler}
     * @since 1.13
     */
    protected UpdateDatabaseHandler(com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler content) {
      super(Databasehandlerendpoint.this, "PUT", REST_PATH, content, com.crowdfoodweb.databasehandlerendpoint.model.DatabaseHandler.class);
    }

    @Override
    public UpdateDatabaseHandler setAlt(java.lang.String alt) {
      return (UpdateDatabaseHandler) super.setAlt(alt);
    }

    @Override
    public UpdateDatabaseHandler setFields(java.lang.String fields) {
      return (UpdateDatabaseHandler) super.setFields(fields);
    }

    @Override
    public UpdateDatabaseHandler setKey(java.lang.String key) {
      return (UpdateDatabaseHandler) super.setKey(key);
    }

    @Override
    public UpdateDatabaseHandler setOauthToken(java.lang.String oauthToken) {
      return (UpdateDatabaseHandler) super.setOauthToken(oauthToken);
    }

    @Override
    public UpdateDatabaseHandler setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (UpdateDatabaseHandler) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public UpdateDatabaseHandler setQuotaUser(java.lang.String quotaUser) {
      return (UpdateDatabaseHandler) super.setQuotaUser(quotaUser);
    }

    @Override
    public UpdateDatabaseHandler setUserIp(java.lang.String userIp) {
      return (UpdateDatabaseHandler) super.setUserIp(userIp);
    }

    @Override
    public UpdateDatabaseHandler set(String parameterName, Object value) {
      return (UpdateDatabaseHandler) super.set(parameterName, value);
    }
  }

  /**
   * Builder for {@link Databasehandlerendpoint}.
   *
   * <p>
   * Implementation is not thread-safe.
   * </p>
   *
   * @since 1.3.0
   */
  public static final class Builder extends com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient.Builder {

    /**
     * Returns an instance of a new builder.
     *
     * @param transport HTTP transport, which should normally be:
     *        <ul>
     *        <li>Google App Engine:
     *        {@code com.google.api.client.extensions.appengine.http.UrlFetchTransport}</li>
     *        <li>Android: {@code newCompatibleTransport} from
     *        {@code com.google.api.client.extensions.android.http.AndroidHttp}</li>
     *        <li>Java: {@link com.google.api.client.googleapis.javanet.GoogleNetHttpTransport#newTrustedTransport()}
     *        </li>
     *        </ul>
     * @param jsonFactory JSON factory, which may be:
     *        <ul>
     *        <li>Jackson: {@code com.google.api.client.json.jackson2.JacksonFactory}</li>
     *        <li>Google GSON: {@code com.google.api.client.json.gson.GsonFactory}</li>
     *        <li>Android Honeycomb or higher:
     *        {@code com.google.api.client.extensions.android.json.AndroidJsonFactory}</li>
     *        </ul>
     * @param httpRequestInitializer HTTP request initializer or {@code null} for none
     * @since 1.7
     */
    public Builder(com.google.api.client.http.HttpTransport transport, com.google.api.client.json.JsonFactory jsonFactory,
        com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
      super(
          transport,
          jsonFactory,
          DEFAULT_ROOT_URL,
          DEFAULT_SERVICE_PATH,
          httpRequestInitializer,
          false);
    }

    /** Builds a new instance of {@link Databasehandlerendpoint}. */
    @Override
    public Databasehandlerendpoint build() {
      return new Databasehandlerendpoint(this);
    }

    @Override
    public Builder setRootUrl(String rootUrl) {
      return (Builder) super.setRootUrl(rootUrl);
    }

    @Override
    public Builder setServicePath(String servicePath) {
      return (Builder) super.setServicePath(servicePath);
    }

    @Override
    public Builder setHttpRequestInitializer(com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
      return (Builder) super.setHttpRequestInitializer(httpRequestInitializer);
    }

    @Override
    public Builder setApplicationName(String applicationName) {
      return (Builder) super.setApplicationName(applicationName);
    }

    @Override
    public Builder setSuppressPatternChecks(boolean suppressPatternChecks) {
      return (Builder) super.setSuppressPatternChecks(suppressPatternChecks);
    }

    @Override
    public Builder setSuppressRequiredParameterChecks(boolean suppressRequiredParameterChecks) {
      return (Builder) super.setSuppressRequiredParameterChecks(suppressRequiredParameterChecks);
    }

    @Override
    public Builder setSuppressAllChecks(boolean suppressAllChecks) {
      return (Builder) super.setSuppressAllChecks(suppressAllChecks);
    }

    /**
     * Set the {@link DatabasehandlerendpointRequestInitializer}.
     *
     * @since 1.12
     */
    public Builder setDatabasehandlerendpointRequestInitializer(
        DatabasehandlerendpointRequestInitializer databasehandlerendpointRequestInitializer) {
      return (Builder) super.setGoogleClientRequestInitializer(databasehandlerendpointRequestInitializer);
    }

    @Override
    public Builder setGoogleClientRequestInitializer(
        com.google.api.client.googleapis.services.GoogleClientRequestInitializer googleClientRequestInitializer) {
      return (Builder) super.setGoogleClientRequestInitializer(googleClientRequestInitializer);
    }
  }
}