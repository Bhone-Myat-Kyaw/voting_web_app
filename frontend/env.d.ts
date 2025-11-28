/// <reference types="react-scripts" />

interface ProcessEnv {
  readonly REACT_APP_SERVER: string;
  readonly REACT_APP_GOOGLE_KEY: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends ProcessEnv {}
}
