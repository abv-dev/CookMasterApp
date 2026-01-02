import { NavigatorScreenParams } from '@react-navigation/native';
import { Meat, CookingResult } from './models';

// Explorer Stack
export type ExplorerStackParamList = {
  ExplorerMain: undefined;
  MeatDetail: { meat: Meat };
};

// Calculator Stack
export type CalculatorStackParamList = {
  CalculatorMain: { preselectedMeat?: Meat } | undefined;
  Result: { result: CookingResult };
};

// History Stack
export type HistoryStackParamList = {
  HistoryMain: undefined;
  HistoryDetailView: { entryId: string };
  Timer: { duration?: number; title?: string };
  Calculator: { preselectedMeat?: Meat } | undefined;
};

// Main Tab Navigator
export type RootTabParamList = {
  Home: undefined;
  Explorer: NavigatorScreenParams<ExplorerStackParamList> | undefined;
  Calculator: NavigatorScreenParams<CalculatorStackParamList> | undefined;
  Timer: { duration?: number; title?: string } | undefined;
  History: NavigatorScreenParams<HistoryStackParamList> | undefined;
  Profile: undefined;
};

// Type helpers for useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
