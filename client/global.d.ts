declare module "*.svg" {
    const content: string;
    export default content;
}
declare module '*.jpg';

declare type useAppDispatch = import('./src/app/providers/appStore').useAppDispatch
declare type AppDispatch = import('./src/app/providers/appStore').AppDispatch
declare type RootState = import('./src/app/providers/appStore').RootState