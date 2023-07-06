System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.12","tslib@2.5.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.12"],["tslib","2.5.3"],["@firebase/auth","0.23.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.12', dep), dep => dependencies.set('tslib@2.5.3', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@firebase/auth.0.23.2.js
var auth_0_23_2_exports = {};
__export(auth_0_23_2_exports, {
  ActionCodeOperation: () => ActionCodeOperation,
  ActionCodeURL: () => ActionCodeURL,
  AuthCredential: () => AuthCredential,
  AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  EmailAuthCredential: () => EmailAuthCredential,
  EmailAuthProvider: () => EmailAuthProvider,
  FacebookAuthProvider: () => FacebookAuthProvider,
  FactorId: () => FactorId,
  GithubAuthProvider: () => GithubAuthProvider,
  GoogleAuthProvider: () => GoogleAuthProvider,
  OAuthCredential: () => OAuthCredential,
  OAuthProvider: () => OAuthProvider,
  OperationType: () => OperationType,
  PhoneAuthCredential: () => PhoneAuthCredential,
  PhoneAuthProvider: () => PhoneAuthProvider,
  PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
  ProviderId: () => ProviderId,
  RecaptchaVerifier: () => RecaptchaVerifier,
  SAMLAuthProvider: () => SAMLAuthProvider,
  SignInMethod: () => SignInMethod,
  TotpMultiFactorGenerator: () => TotpMultiFactorGenerator,
  TotpSecret: () => TotpSecret,
  TwitterAuthProvider: () => TwitterAuthProvider,
  applyActionCode: () => applyActionCode,
  beforeAuthStateChanged: () => beforeAuthStateChanged,
  browserLocalPersistence: () => browserLocalPersistence,
  browserPopupRedirectResolver: () => browserPopupRedirectResolver,
  browserSessionPersistence: () => browserSessionPersistence,
  checkActionCode: () => checkActionCode,
  confirmPasswordReset: () => confirmPasswordReset,
  connectAuthEmulator: () => connectAuthEmulator,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
  debugErrorMap: () => debugErrorMap,
  deleteUser: () => deleteUser,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
  getAdditionalUserInfo: () => getAdditionalUserInfo,
  getAuth: () => getAuth,
  getIdToken: () => getIdToken,
  getIdTokenResult: () => getIdTokenResult,
  getMultiFactorResolver: () => getMultiFactorResolver,
  getRedirectResult: () => getRedirectResult,
  inMemoryPersistence: () => inMemoryPersistence,
  indexedDBLocalPersistence: () => indexedDBLocalPersistence,
  initializeAuth: () => initializeAuth,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig,
  isSignInWithEmailLink: () => isSignInWithEmailLink,
  linkWithCredential: () => linkWithCredential,
  linkWithPhoneNumber: () => linkWithPhoneNumber,
  linkWithPopup: () => linkWithPopup,
  linkWithRedirect: () => linkWithRedirect,
  multiFactor: () => multiFactor,
  onAuthStateChanged: () => onAuthStateChanged,
  onIdTokenChanged: () => onIdTokenChanged,
  parseActionCodeURL: () => parseActionCodeURL,
  prodErrorMap: () => prodErrorMap,
  reauthenticateWithCredential: () => reauthenticateWithCredential,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
  reauthenticateWithPopup: () => reauthenticateWithPopup,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect,
  reload: () => reload,
  sendEmailVerification: () => sendEmailVerification,
  sendPasswordResetEmail: () => sendPasswordResetEmail,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail,
  setPersistence: () => setPersistence,
  signInAnonymously: () => signInAnonymously,
  signInWithCredential: () => signInWithCredential,
  signInWithCustomToken: () => signInWithCustomToken,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword,
  signInWithEmailLink: () => signInWithEmailLink,
  signInWithPhoneNumber: () => signInWithPhoneNumber,
  signInWithPopup: () => signInWithPopup,
  signInWithRedirect: () => signInWithRedirect,
  signOut: () => signOut,
  unlink: () => unlink,
  updateCurrentUser: () => updateCurrentUser,
  updateEmail: () => updateEmail,
  updatePassword: () => updatePassword,
  updatePhoneNumber: () => updatePhoneNumber,
  updateProfile: () => updateProfile,
  useDeviceLanguage: () => useDeviceLanguage,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_0_23_2_exports);

// node_modules/@firebase/auth/dist/esm2017/index-e3d5d3f4.js
var import_util = require("@firebase/util@1.9.3");
var import_app = require("@firebase/app@0.9.12");
var import_tslib = require("tslib@2.5.3");
var import_logger = require("@firebase/logger@0.4.0");
var import_component = require("@firebase/component@0.6.4");
var FactorId = {
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PASSWORD: "password",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var SignInMethod = {
  EMAIL_LINK: "emailLink",
  EMAIL_PASSWORD: "password",
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  PASSWORD_RESET: "PASSWORD_RESET",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"]: "This operation is restricted to administrators only.",
    ["argument-error"]: "",
    ["app-not-authorized"]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"]: "Cordova framework is not ready.",
    ["cors-unsupported"]: "This browser is not supported.",
    ["credential-already-in-use"]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"]: "The email address is already in use by another account.",
    ["emulator-config-failed"]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"]: "The action code has expired.",
    ["cancelled-popup-request"]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"]: "An internal AuthError has occurred.",
    ["invalid-app-credential"]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"]: "The mobile app identifier is not registed for the current project.",
    ["invalid-user-token"]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"]: "An internal AuthError has occurred.",
    ["invalid-verification-code"]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"]: "The supplied auth credential is malformed or has expired.",
    ["invalid-message-payload"]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"]: "A non-empty password must be provided",
    ["missing-multi-factor-info"]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"]: "An internal AuthError has occurred.",
    ["no-such-provider"]: "User was not linked to an account with the given provider.",
    ["null-user"]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"]: "The operation has timed out.",
    ["user-token-expired"]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"]: "The operation requires a verified email.",
    ["user-cancelled"]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"]: "The user account has been disabled by an administrator.",
    ["user-mismatch"]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"]: "",
    ["weak-password"]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"]: "Invalid request parameters.",
    ["invalid-recaptcha-version"]: "The reCAPTCHA version is invalid when sending request to the backend."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var debugErrorMap = _debugErrorMap;
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new import_util.ErrorFactory("auth", "Firebase", _prodErrorMap());
var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
  ARGUMENT_ERROR: "auth/argument-error",
  APP_NOT_AUTHORIZED: "auth/app-not-authorized",
  APP_NOT_INSTALLED: "auth/app-not-installed",
  CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
  CODE_EXPIRED: "auth/code-expired",
  CORDOVA_NOT_READY: "auth/cordova-not-ready",
  CORS_UNSUPPORTED: "auth/cors-unsupported",
  CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
  CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
  DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
  DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
  EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
  EMAIL_EXISTS: "auth/email-already-in-use",
  EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
  EXPIRED_OOB_CODE: "auth/expired-action-code",
  EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
  INTERNAL_ERROR: "auth/internal-error",
  INVALID_API_KEY: "auth/invalid-api-key",
  INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
  INVALID_APP_ID: "auth/invalid-app-id",
  INVALID_AUTH: "auth/invalid-user-token",
  INVALID_AUTH_EVENT: "auth/invalid-auth-event",
  INVALID_CERT_HASH: "auth/invalid-cert-hash",
  INVALID_CODE: "auth/invalid-verification-code",
  INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
  INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
  INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
  INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
  INVALID_IDP_RESPONSE: "auth/invalid-credential",
  INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
  INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
  INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
  INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
  INVALID_OOB_CODE: "auth/invalid-action-code",
  INVALID_ORIGIN: "auth/unauthorized-domain",
  INVALID_PASSWORD: "auth/wrong-password",
  INVALID_PERSISTENCE: "auth/invalid-persistence-type",
  INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
  INVALID_PROVIDER_ID: "auth/invalid-provider-id",
  INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
  INVALID_SENDER: "auth/invalid-sender",
  INVALID_SESSION_INFO: "auth/invalid-verification-id",
  INVALID_TENANT_ID: "auth/invalid-tenant-id",
  MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
  MFA_REQUIRED: "auth/multi-factor-auth-required",
  MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
  MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
  MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
  MISSING_CODE: "auth/missing-verification-code",
  MISSING_CONTINUE_URI: "auth/missing-continue-uri",
  MISSING_IFRAME_START: "auth/missing-iframe-start",
  MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
  MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
  MISSING_MFA_INFO: "auth/missing-multi-factor-info",
  MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
  MISSING_PHONE_NUMBER: "auth/missing-phone-number",
  MISSING_SESSION_INFO: "auth/missing-verification-id",
  MODULE_DESTROYED: "auth/app-deleted",
  NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
  NETWORK_REQUEST_FAILED: "auth/network-request-failed",
  NULL_USER: "auth/null-user",
  NO_AUTH_EVENT: "auth/no-auth-event",
  NO_SUCH_PROVIDER: "auth/no-such-provider",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
  POPUP_BLOCKED: "auth/popup-blocked",
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
  PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
  QUOTA_EXCEEDED: "auth/quota-exceeded",
  REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
  REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
  REJECTED_CREDENTIAL: "auth/rejected-credential",
  SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
  TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
  TIMEOUT: "auth/timeout",
  TOKEN_EXPIRED: "auth/user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
  UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
  UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
  UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
  UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
  UNVERIFIED_EMAIL: "auth/unverified-email",
  USER_CANCELLED: "auth/user-cancelled",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  USER_SIGNED_OUT: "auth/user-signed-out",
  WEAK_PASSWORD: "auth/weak-password",
  WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
  ALREADY_INITIALIZED: "auth/already-initialized",
  RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "auth/missing-client-type",
  MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
  INVALID_REQ_TYPE: "auth/invalid-req-type"
};
var logClient = new import_logger.Logger("@firebase/auth");
function _logWarn(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.WARN) {
    logClient.warn(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.ERROR) {
    logClient.error(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new import_util.ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error");
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = (0, import_util.isMobileCordova)() || (0, import_util.isReactNative)();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const {
    url
  } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "missing-password",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error",
  ["RECAPTCHA_NOT_ENABLED"]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"]: "invalid-req-type"
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = (0, import_util.querystring)(Object.assign({
      key: auth.config.apiKey
    }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([fetchFn(), networkTimeout.promise]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed", {
      "message": String(e)
    });
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth.config, base);
}
var NetworkTimeout = class {
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function deleteLinkedAccounts(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {}
  return void 0;
}
function getIdToken(user, forceRefresh = false) {
  return (0, import_util.getModularInstance)(user).getIdToken(forceRefresh);
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = (0, import_util.base64Decode)(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof import_util.FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
    idToken
  }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map(_a => {
    var {
        providerId
      } = _a,
      provider = (0, import_tslib.__rest)(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = (0, import_util.querystring)({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const {
      tokenApiHost,
      apiKey
    } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const {
      accessToken,
      refreshToken,
      expiresIn
    } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", {
    appName
  });
}
var UserImpl = class {
  constructor(_a) {
    var {
        uid,
        auth,
        stsTokenManager
      } = _a,
      opt = (0, import_tslib.__rest)(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, {
      idToken
    }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
};
var instanceCache = /* @__PURE__ */new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name: name2
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async persistence => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter(persistence => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {}
    }
    const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async persistence => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {}
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = (0, import_util.getUA)()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, import_util.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, import_util.getUA)()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, import_util.getUA)()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, import_util.getUA)()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, import_util.getUA)()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, import_util.getUA)()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = (0, import_util.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, import_util.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, import_util.getUA)()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return (0, import_util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, import_util.getUA)()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName((0, import_util.getUA)());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName((0, import_util.getUA)())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${import_app.SDK_VERSION}/${reportedFrameworks}`;
}
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
  return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
}
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.emailPasswordEnabled = false;
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.emailPasswordEnabled = response.recaptchaEnforcementState.some(enforcementState => enforcementState.provider === "EMAIL_PASSWORD_PROVIDER" && enforcementState.enforcementState !== "OFF");
  }
};
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = e => {
      const error = _createError("internal-error");
      error.customData = e;
      reject(error);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var RECAPTCHA_ENTERPRISE_URL = "https://www.google.com/recaptcha/enterprise.js?render=";
var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
var FAKE_TOKEN = "NO_RECAPTCHA";
var RecaptchaEnterpriseVerifier = class {
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  async verify(action = "verify", forceRefresh = false) {
    async function retrieveSiteKey(auth) {
      if (!forceRefresh) {
        if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
          return auth._agentRecaptchaConfig.siteKey;
        }
        if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
          return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
        }
      }
      return new Promise(async (resolve, reject) => {
        getRecaptchaConfig(auth, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
        }).then(response => {
          if (response.recaptchaKey === void 0) {
            reject(new Error("recaptcha Enterprise site key undefined"));
          } else {
            const config = new RecaptchaConfig(response);
            if (auth.tenantId == null) {
              auth._agentRecaptchaConfig = config;
            } else {
              auth._tenantRecaptchaConfigs[auth.tenantId] = config;
            }
            return resolve(config.siteKey);
          }
        }).catch(error => {
          reject(error);
        });
      });
    }
    function retrieveRecaptchaToken(siteKey, resolve, reject) {
      const grecaptcha = window.grecaptcha;
      if (isEnterprise(grecaptcha)) {
        grecaptcha.enterprise.ready(() => {
          grecaptcha.enterprise.execute(siteKey, {
            action
          }).then(token => {
            resolve(token);
          }).catch(() => {
            resolve(FAKE_TOKEN);
          });
        });
      } else {
        reject(Error("No reCAPTCHA enterprise script loaded."));
      }
    }
    return new Promise((resolve, reject) => {
      retrieveSiteKey(this.auth).then(siteKey => {
        if (!forceRefresh && isEnterprise(window.grecaptcha)) {
          retrieveRecaptchaToken(siteKey, resolve, reject);
        } else {
          if (typeof window === "undefined") {
            reject(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          _loadJS(RECAPTCHA_ENTERPRISE_URL + siteKey).then(() => {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          }).catch(error => {
            reject(error);
          });
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
};
async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth);
  let captchaResponse;
  try {
    captchaResponse = await verifier.verify(action);
  } catch (error) {
    captchaResponse = await verifier.verify(action, true);
  }
  const newRequest = Object.assign({}, request);
  if (!captchaResp) {
    Object.assign(newRequest, {
      captchaResponse
    });
  } else {
    Object.assign(newRequest, {
      "captchaResp": captchaResponse
    });
  }
  Object.assign(newRequest, {
    "clientType": "CLIENT_TYPE_WEB"
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
  });
  return newRequest;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {}
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, true);
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    const user = userExtern ? (0, import_util.getModularInstance)(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  async initializeRecaptchaConfig() {
    const response = await getRecaptchaConfig(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
    });
    const config = new RecaptchaConfig(response);
    if (this.tenantId == null) {
      this._agentRecaptchaConfig = config;
    } else {
      this._tenantRecaptchaConfigs[this.tenantId] = config;
    }
    if (config.emailPasswordEnabled) {
      const verifier = new RecaptchaEnterpriseVerifier(this);
      void verifier.verify();
    }
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new import_util.ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {});
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => cb(this.currentUser));
    if (typeof nextOrObserver === "function") {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
    }
    return headers;
  }
  async _getAppCheckToken() {
    var _a;
    const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getToken());
    if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
      _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
    }
    return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
  }
};
function _castAuth(auth) {
  return (0, import_util.getModularInstance)(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0, import_util.createSubscribe)(observer => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
};
function initializeAuth(app, deps) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if ((0, import_util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({
    options: deps
  });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);
  _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed");
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  authInternal.config.emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return {
      host: "",
      port: null
    };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(":");
    return {
      host,
      port: parsePort(port)
    };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function resetPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function applyActionCode$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
  return sendOobCode(auth, request);
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth) {
    var _a;
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        if ((_a = auth._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
          const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
          return signInWithPassword(auth, requestWithRecaptcha);
        } else {
          return signInWithPassword(auth, request).catch(async error => {
            if (error.code === `auth/${"missing-recaptcha-token"}`) {
              console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
              return signInWithPassword(auth, requestWithRecaptcha);
            } else {
              return Promise.reject(error);
            }
          });
        }
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        return updateEmailPassword(auth, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
        providerId,
        signInMethod
      } = obj,
      rest = (0, import_tslib.__rest)(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = (0, import_util.querystring)(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;
    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["link"];
  const doubleDeepLink = link ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(link))["deep_link_id"] : null;
  const iOSDeepLink = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class extends BaseOAuthProvider {
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error");
    return OAuthCredential._fromParams(obj);
  }
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error");
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }
  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;
    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }
    if (!providerId) {
      return null;
    }
    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken
    } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class extends AuthCredential {
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;
    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }
};
var SAML_PROVIDER_PREFIX = "saml.";
var SAMLAuthProvider = class extends FederatedAuthProvider {
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error");
    super(providerId);
  }
  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error");
    return credential;
  }
  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      pendingToken,
      providerId
    } = tokenResponse;
    if (!pendingToken || !providerId) {
      return null;
    }
    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }
};
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthAccessToken,
      oauthTokenSecret
    } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
async function signInAnonymously(auth) {
  var _a;
  const authInternal = _castAuth(auth);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
async function unlink(user, providerId) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(true, userInternal, providerId);
  const {
    providerUserInfo
  } = await deleteLinkedAccounts(userInternal.auth, {
    idToken: await userInternal.getIdToken(),
    deleteProvider: [providerId]
  });
  const providersLeft = providerDataAsNames(providerUserInfo || []);
  userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));
  if (!providersLeft.has("phone")) {
    userInternal.phoneNumber = null;
  }
  await userInternal.auth._persistUserIfCurrent(userInternal);
  return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _assertLinkedStatus(expected, user, provider) {
  await _reloadWithoutSaving(user);
  const providerIds = providerDataAsNames(user.providerData);
  const code = expected === false ? "provider-already-linked" : "no-such-provider";
  _assert(providerIds.has(provider) === expected, user.auth, code);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const {
    auth
  } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function linkWithCredential(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, credential.providerId);
  return _link$1(userInternal, credential);
}
async function reauthenticateWithCredential(user, credential) {
  return _reauthenticate((0, import_util.getModularInstance)(user), credential);
}
async function signInWithCustomToken$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
}
async function signInWithCustomToken(auth, customToken) {
  const authInternal = _castAuth(auth);
  const response = await signInWithCustomToken$1(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}
var MultiFactorInfoImpl = class {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }
  static _fromServerResponse(auth, enrollment) {
    if ("phoneInfo" in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    } else if ("totpInfo" in enrollment) {
      return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }
    return _fail(auth, "internal-error");
  }
};
var PhoneMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri");
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id");
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name");
    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
  } else {
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
        }
        await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  });
}
async function applyActionCode(auth, oobCode) {
  await applyActionCode$1((0, import_util.getModularInstance)(auth), {
    oobCode
  });
}
async function checkActionCode(auth, oobCode) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const response = await resetPassword(authModular, {
    oobCode
  });
  const operation = response.requestType;
  _assert(operation, authModular, "internal-error");
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error");
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error");
    default:
      _assert(response.email, authModular, "internal-error");
  }
  let multiFactorInfo = null;
  if (response.mfaInfo) {
    multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
  }
  return {
    data: {
      email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
      previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
      multiFactorInfo
    },
    operation
  };
}
async function verifyPasswordResetCode(auth, code) {
  const {
    data
  } = await checkActionCode((0, import_util.getModularInstance)(auth), code);
  return data.email;
}
async function createUserWithEmailAndPassword(auth, email, password) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
  };
  let signUpResponse;
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
    signUpResponse = signUp(authInternal, requestWithRecaptcha);
  } else {
    signUpResponse = signUp(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
        return signUp(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
  const response = await signUpResponse.catch(error => {
    return Promise.reject(error);
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password));
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "EMAIL_SIGNIN",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error");
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
  } else {
    setActionCodeSettings(request, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
        await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch");
  return signInWithCredential(authModular, credential);
}
async function createAuthUri(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
}
async function fetchSignInMethodsForEmail(auth, email) {
  const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
  const request = {
    identifier: email,
    continueUri
  };
  const {
    signinMethods
  } = await createAuthUri((0, import_util.getModularInstance)(auth), request);
  return signinMethods || [];
}
async function sendEmailVerification(user, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_EMAIL",
    idToken
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await sendEmailVerification$1(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_AND_CHANGE_EMAIL",
    idToken,
    newEmail
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await verifyAndChangeEmail(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, {
  displayName,
  photoURL: photoUrl
}) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({
    providerId
  }) => providerId === "password");
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function updateEmail(user, newEmail) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), newEmail, null);
}
function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
  const {
    auth
  } = user;
  const idToken = await user.getIdToken();
  const request = {
    idToken,
    returnSecureToken: true
  };
  if (email) {
    request.email = email;
  }
  if (password) {
    request.password = password;
  }
  const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
  await user._updateTokensIfNecessary(response, true);
}
function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;
  if (!idTokenResponse) {
    return null;
  }
  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }
  if (!providerId) {
    return null;
  }
  switch (providerId) {
    case "facebook.com":
      return new FacebookAdditionalUserInfo(isNewUser, profile);
    case "github.com":
      return new GithubAdditionalUserInfo(isNewUser, profile);
    case "google.com":
      return new GoogleAdditionalUserInfo(isNewUser, profile);
    case "twitter.com":
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
    case "custom":
    case "anonymous":
      return new GenericAdditionalUserInfo(isNewUser, null);
    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}
var GenericAdditionalUserInfo = class {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }
};
var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }
};
var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com", profile);
  }
};
var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }
};
var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com", profile);
  }
};
var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com", profile, screenName);
  }
};
function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;
  if (user.isAnonymous && !_tokenResponse) {
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }
  return _fromIdTokenResponse(_tokenResponse);
}
function setPersistence(auth, persistence) {
  return (0, import_util.getModularInstance)(auth).setPersistence(persistence);
}
function initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);
  return authInternal.initializeRecaptchaConfig();
}
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0, import_util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function useDeviceLanguage(auth) {
  (0, import_util.getModularInstance)(auth).useDeviceLanguage();
}
function updateCurrentUser(auth, user) {
  return (0, import_util.getModularInstance)(auth).updateCurrentUser(user);
}
function signOut(auth) {
  return (0, import_util.getModularInstance)(auth).signOut();
}
async function deleteUser(user) {
  return (0, import_util.getModularInstance)(user).delete();
}
var MultiFactorSessionImpl = class {
  constructor(type, credential, auth) {
    this.type = type;
    this.credential = credential;
    this.auth = auth;
  }
  static _fromIdtoken(idToken, auth) {
    return new MultiFactorSessionImpl("enroll", idToken, auth);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin", mfaPendingCredential);
  }
  toJSON() {
    const key = this.type === "enroll" ? "idToken" : "pendingCredential";
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }
  static fromJSON(obj) {
    var _a, _b;
    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error");
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new MultiFactorResolverImpl(session, hints, async assertion => {
      const mfaResponse = await assertion._process(auth, session);
      delete serverResponse.mfaInfo;
      delete serverResponse.mfaPendingCredential;
      const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
        idToken: mfaResponse.idToken,
        refreshToken: mfaResponse.refreshToken
      });
      switch (error.operationType) {
        case "signIn":
          const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
          await auth._updateCurrentUser(userCredential.user);
          return userCredential;
        case "reauthenticate":
          _assert(error.user, auth, "internal-error");
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error");
      }
    });
  }
  async resolveSignIn(assertionExtern) {
    const assertion = assertionExtern;
    return this.signInResolver(assertion);
  }
};
function getMultiFactorResolver(auth, error) {
  var _a;
  const authModular = (0, import_util.getModularInstance)(auth);
  const errorInternal = error;
  _assert(error.customData.operationType, authModular, "argument-error");
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error");
  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function startEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
}
var MultiFactorUserImpl = class {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];
    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }
  static _fromUser(user) {
    return new MultiFactorUserImpl(user);
  }
  async getSession() {
    return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user.auth);
  }
  async enroll(assertionExtern, displayName) {
    const assertion = assertionExtern;
    const session = await this.getSession();
    const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
    await this.user._updateTokensIfNecessary(finalizeMfaResponse);
    return this.user.reload();
  }
  async unenroll(infoOrUid) {
    const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
    const idToken = await this.user.getIdToken();
    try {
      const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
        idToken,
        mfaEnrollmentId
      }));
      this.enrolledFactors = this.enrolledFactors.filter(({
        uid
      }) => uid !== mfaEnrollmentId);
      await this.user._updateTokensIfNecessary(idTokenResponse);
      await this.user.reload();
    } catch (e) {
      throw e;
    }
  }
};
var multiFactorUserCache = /* @__PURE__ */new WeakMap();
function multiFactor(user) {
  const userModular = (0, import_util.getModularInstance)(user);
  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }
  return multiFactorUserCache.get(userModular);
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
function _iframeCannotSyncWebStorage() {
  const ua = (0, import_util.getUA)();
  return _isSafari(ua) || _isIOS(ua);
}
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    if (this.safariLocalStorageNotSynced) {
      const storedValue2 = this.storage.getItem(key);
      if (event.newValue !== storedValue2) {
        if (event.newValue !== null) {
          this.storage.setItem(key, event.newValue);
        } else {
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        return;
      }
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async promise => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const {
      eventId,
      eventType,
      data
    } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async handler => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME = "firebaseLocalStorageDb";
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {}
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries(db => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries(db => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */new Set();
    for (const {
      fbase_key: key,
      value
    } of result) {
      keysInResult.add(key);
      if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
        this.notifyListeners(key, value);
        keys.push(key);
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function finalizeSignInTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 6e4;
var _WIDGET_ID_START = 1e12;
var MockReCaptcha = class {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = /* @__PURE__ */new Map();
  }
  render(container, parameters) {
    const id = this.counter;
    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
    this.counter++;
    return id;
  }
  reset(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
    this._widgets.delete(id);
  }
  getResponse(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
  }
  async execute(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
    return "";
  }
};
var MockWidget = class {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;
    this.clickHandler = () => {
      this.execute();
    };
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, "argument-error", {
      appName
    });
    this.container = container;
    this.isVisible = this.params.size !== "invisible";
    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener("click", this.clickHandler);
    }
  }
  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }
  delete() {
    this.checkIfDeleted();
    this.deleted = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted();
    if (this.timerId) {
      return;
    }
    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        "expired-callback": expiredCallback
      } = this.params;
      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;
        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }
        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }
  checkIfDeleted() {
    if (this.deleted) {
      throw new Error("reCAPTCHA mock was already deleted!");
    }
  }
};
function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }
  return chars.join("");
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var RECAPTCHA_BASE = "https://www.google.com/recaptcha/api.js?";
var ReCaptchaLoaderImpl = class {
  constructor() {
    var _a;
    this.hostLanguage = "";
    this.counter = 0;
    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }
  load(auth, hl = "") {
    _assert(isHostLanguageValid(hl), auth, "argument-error");
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"));
          return;
        }
        const render = recaptcha.render;
        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };
        this.hostLanguage = hl;
        resolve(recaptcha);
      };
      const url = `${RECAPTCHA_BASE}?${(0, import_util.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: "explicit",
        hl
      })}`;
      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(hl) {
    var _a;
    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
};
function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
var MockReCaptchaLoaderImpl = class {
  async load(auth) {
    return new MockReCaptcha(auth);
  }
  clearedOneInstance() {}
};
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
var DEFAULT_PARAMS = {
  theme: "light",
  type: "image"
};
var RecaptchaVerifier = class {
  constructor(containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS), authExtern) {
    this.parameters = parameters;
    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = /* @__PURE__ */new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === "invisible";
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error");
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  async verify() {
    this.assertNotDestroyed();
    const id = await this.render();
    const recaptcha = this.getAssertedRecaptcha();
    const response = recaptcha.getResponse(id);
    if (response) {
      return response;
    }
    return new Promise(resolve => {
      const tokenChange = token => {
        if (!token) {
          return;
        }
        this.tokenChangeListeners.delete(tokenChange);
        resolve(token);
      };
      this.tokenChangeListeners.add(tokenChange);
      if (this.isInvisible) {
        recaptcha.execute(id);
      }
    });
  }
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    if (this.renderPromise) {
      return this.renderPromise;
    }
    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;
    this._recaptchaLoader.clearedOneInstance();
    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }
  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error");
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
  }
  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));
      if (typeof existing === "function") {
        existing(token);
      } else if (typeof existing === "string") {
        const globalFunc = _window()[existing];
        if (typeof globalFunc === "function") {
          globalFunc(token);
        }
      }
    };
  }
  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error");
  }
  async makeRenderPromise() {
    await this.init();
    if (!this.widgetId) {
      let container = this.container;
      if (!this.isInvisible) {
        const guaranteedEmpty = document.createElement("div");
        container.appendChild(guaranteedEmpty);
        container = guaranteedEmpty;
      }
      this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error");
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error");
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error");
    return this.recaptcha;
  }
};
function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    resolver = () => resolve();
    window.addEventListener("load", resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener("load", resolver);
    }
    throw e;
  });
}
var ConfirmationResultImpl = class {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }
  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
    return this.onConfirmation(authCredential);
  }
};
async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  const authInternal = _castAuth(auth);
  const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
}
async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, "phone");
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
}
async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const {
        sessionInfo
      } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  await _link$1((0, import_util.getModularInstance)(user), credential);
}
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      phoneNumber,
      temporaryProof
    } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = {
        resolve,
        reject
      };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const {
      urlResponse,
      sessionId,
      postBody,
      tenantId,
      error,
      type
    } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
async function linkWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {}
  cleanUp() {}
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!(await persistence._isAvailable())) {
    return false;
  }
  const hasPendingRedirect = (await persistence._get(key)) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
  return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  await authInternal._initializationPromise;
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  await _setPendingRedirectStatus(resolverInternal, authInternal);
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect");
}
function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
}
function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _assertLinkedStatus(false, userInternal, provider.providerId);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
}
async function getRedirectResult(auth, resolver) {
  await _castAuth(auth)._initializationPromise;
  return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
async function prepareUserForRedirect(user) {
  const eventId = _generateEventId(`${user.uid}:::`);
  user._redirectEventId = eventId;
  await user.auth._setRedirectUser(user);
  await user.auth._persistUserIfCurrent(user);
  return eventId;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */new Set();
    this.consumers = /* @__PURE__ */new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join("-");
}
function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const {
    authorizedDomains
  } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {}
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const {
    protocol,
    hostname
  } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: import_app.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${(0, import_util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }
};
function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = (0, import_util.getUA)().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {}
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: import_app.SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!(0, import_util.isEmpty)(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter(scope => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  const appCheckToken = await auth._getAppCheckToken();
  const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
  return `${getHandlerBase(auth)}?${(0, import_util.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    _setWindowLocation(url);
    return new Promise(() => {});
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const {
        manager,
        promise: promise2
      } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", iframeEvent => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = {
      manager
    };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  static async generateSecret(session) {
    const mfaSession = session;
    _assert(typeof mfaSession.auth !== "undefined", "internal-error");
    const response = await startEnrollTotpMfa(mfaSession.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp");
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error");
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error");
    const totpVerificationInfo = {
      verificationCode: this.otp
    };
    return finalizeSignInTotpMfa(auth, {
      mfaPendingCredential,
      mfaEnrollmentId: this.enrollmentId,
      totpVerificationInfo
    });
  }
};
var TotpSecret = class {
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  generateQrCodeUrl(accountName, issuer) {
    var _a;
    let useDefaults = false;
    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }
    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
      }
      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }
    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }
};
function _isEmptyString(input) {
  return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name = "@firebase/auth";
var version = "0.23.2";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return {
      accessToken
    };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  (0, import_app._registerComponent)(new import_component.Component("auth", (container, {
    options: deps
  }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const appCheckServiceProvider = container.getProvider("app-check-internal");
    const {
      apiKey,
      authDomain
    } = app.options;
    _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", {
      appName: app.name
    });
    const config = {
      apiKey,
      authDomain,
      clientPlatform,
      apiHost: "identitytoolkit.googleapis.com",
      tokenApiHost: "securetoken.googleapis.com",
      apiScheme: "https",
      sdkClientVersion: _getClientVersion(clientPlatform)
    };
    const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
    _initializeAuthInstance(authInstance, deps);
    return authInstance;
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app = (0, import_app.getApp)()) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncUrl = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncUrl) {
    const mintCookie = mintCookieFactory(authTokenSyncUrl);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_util2 = require("@firebase/util@1.9.3");
var import_app2 = require("@firebase/app@0.9.12");
var import_tslib2 = require("tslib@2.5.3");
var import_logger2 = require("@firebase/logger@0.4.0");
var import_component2 = require("@firebase/component@0.6.4");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4wLjIzLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21vZGVsL2VudW1fbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJkZWJ1Z0Fzc2VydCIsImlzTW9iaWxlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJob3N0IiwiYmFzZSIsImFwaVNjaGVtZSIsIl9lbXVsYXRvclVybCIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXJyb3JCYWNrb2ZmIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJsZW5ndGgiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJhc3NpZ24iLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJwcm92aWRlciIsImltcG9ydF90c2xpYiIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwicHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsInR5cGUiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJfaXNJRTEwIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsImVtYWlsUGFzc3dvcmRFbmFibGVkIiwicmVjYXB0Y2hhS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGUiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfbG9hZEpTIiwicmVzb2x2ZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiYXBwZW5kQ2hpbGQiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1VSTCIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsIl9jYXN0QXV0aCIsInZlcmlmeSIsImFjdGlvbiIsInJldHJpZXZlU2l0ZUtleSIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJ0aGVuIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwicmVhZHkiLCJleGVjdXRlIiwianNIZWxwZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fbG9hZEpTIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiY2FwdGNoYVJlc3AiLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJBdXRoSW1wbCIsImFwcCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJTdWJzY3JpcHRpb24iLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwibGFzdE5vdGlmaWVkVWlkIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImJlZm9yZVN0YXRlUXVldWUiLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJhZGRPYnNlcnZlciIsIm9wZXJhdGlvbnMiLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIm9ic2VydmVyIiwiZGVwcyIsImlzSW5pdGlhbGl6ZWQiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJoaWVyYXJjaHkiLCJhdXRoSW50ZXJuYWwiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsInNldHRpbmdzIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsInBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmsiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwiY3VzdG9tVG9rZW4iLCJnZXRJZFRva2VuUmVzcG9uc2UiLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlcXVlc3RUeXBlIiwiYXV0aGVudGljYXRpb24uc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgICAgIC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwibmV3UGFzc3dvcmQiLCJhY2NvdW50LnJlc2V0UGFzc3dvcmQiLCJhY2NvdW50LmFwcGx5QWN0aW9uQ29kZSIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsImFwaS5zZW5kU2lnbkluTGlua1RvRW1haWwiLCJhcGlcclxuICAgICAgICAgICAgLnNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwiYXBpLnNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsImFwaS52ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInByb2ZpbGVSZXF1ZXN0IiwiYXBpVXBkYXRlUHJvZmlsZSIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwiYXBpVXBkYXRlRW1haWxQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwid2l0aGRyYXdNZmEiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9pZnJhbWVDYW5ub3RTeW5jV2ViU3RvcmFnZSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiX2lzTW9iaWxlQnJvd3NlciIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwic2FmYXJpTG9jYWxTdG9yYWdlTm90U3luY2VkIiwic3RvcmVkVmFsdWUiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJzdGF0dXMiLCJoYW5kbGVyIiwib3JpZ2luIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJpIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfZGVsZXRlT2JqZWN0IiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJfd2lkZ2V0cyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJjaGVja0lmRGVsZXRlZCIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJjaGFyQXQiLCJfSlNMT0FEX0NBTExCQUNLIiwianNIZWxwZXJzLl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJFQ0FQVENIQV9CQVNFIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsImpzSGVscGVycy5fbG9hZEpTIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJzdGFydEVucm9sbFBob25lTWZhIiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rVXNlciIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJjb25zdW1lcnMiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJjYWNoZWRFdmVudFVpZHMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsIlVSTCIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJSZWdFeHAiLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiY2JOYW1lIiwianMuX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwianNcclxuICAgICAgICAgICAgICAgIC5fbG9hZEpTIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaUxvYWRlci5fbG9hZEdhcGkiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsIl9vcGVuIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJzdGFydEVucm9sbFRvdHBNZmEiLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJpbnRlcm5hbExpc3RlbmVycyIsInVuc3Vic2NyaWJlIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiaW1wb3J0X2NvbXBvbmVudCIsImdldFByb3ZpZGVyIiwiYXV0aEluc3RhbmNlIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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