// This work for typing routes but why? => ask Jens or Remco
export type NavigationScreen<T extends RootStackParams> = {
  [K in keyof T]: K;
}[keyof T];
