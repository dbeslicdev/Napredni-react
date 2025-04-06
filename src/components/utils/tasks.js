import { UseStateCounter } from "../../tasks/React/Hooks/UseState/1.Counter/UseStateCounter";
import { UseStateToggler } from "../../tasks/React/Hooks/UseState/2.Toggler/UseStateToggler";
import { UseStateDynamicInput } from "../../tasks/React/Hooks/UseState/3.Dynamic Input Handling/UseStateDynamicInput";
import { UseStateListSearch } from "../../tasks/React/Hooks/UseState/4.List Search/UseStateListSearch";
import { UseEffectCounter } from "../../tasks/React/Hooks/UseEffect/1.Counter/UseEffectCounter";
import { UseEffectDataFetch } from "../../tasks/React/Hooks/UseEffect/2.Fetching Data On Mount/UseEffectDataFetch";

import { UseReducerCounter } from "../../tasks/React/Hooks/UseReducer/1.UseReducerCounter/UseReducerCounter";
import { UseReducerToggle } from "../../tasks/React/Hooks/UseReducer/2.UseReducerToggle/UseReducerToggle";
import { ContextRoot } from "../../tasks/React/Hooks/UseContext/1.ThemeSwitcher/ContextRoot";
import { UseMemoSlowFunction } from "../../tasks/React/Hooks/UseMemo/1.UseMemoSlowFunction/UseMemoSlowFunction";

import { UseCallbackCounter } from "../../tasks/React/Hooks/UseCallback/1.Counter/UseCallbackCounter";
import { UseRefComponentRender } from "../../tasks/React/Hooks/UseRef/1.UseRefComponentRender/UseRefComponentRender";
import { UseRefFocus } from "../../tasks/React/Hooks/UseRef/2.UseRefFocus/UseRefFocus";
import { UseRefValidation } from "../../tasks/React/Hooks/UseRef/4.UseRefValidation/UseRefValidation";
import { PreviousCounter } from "../../tasks/React/Hooks/UseRef/3.PreviousCounter/PreviousCounter";

export const tasks = {
  "React Hooks": {
    UseState: {
      Counter: UseStateCounter,
      Toggler: UseStateToggler,
      "Dynamic Input": UseStateDynamicInput,
      "List Search": UseStateListSearch,
    },
    UseEffect: {
      "Counter with useEffect": UseEffectCounter,
      "Data Fetching": UseEffectDataFetch,
    },
    UseRef: {
      "Component Render": UseRefComponentRender,
      "Input Focus": UseRefFocus,
      "Previous Counter": PreviousCounter,
      Validation: UseRefValidation,
    },
    UseReducer: {
      Counter: UseReducerCounter,
      "Toggle Boolean": UseReducerToggle,
    },
    UseContext: {
      "Theme Switcher": ContextRoot,
    },
    UseMemo: {
      "Slow Function": UseMemoSlowFunction,
    },
    UseCallback: {
      UseCallbackCounter: UseCallbackCounter,
    },
  },
};
