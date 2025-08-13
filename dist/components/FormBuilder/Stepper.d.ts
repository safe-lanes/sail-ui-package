import React from "react";
import { StepConfig } from "./types";
interface Props {
    steps: StepConfig[];
    current: number;
    direction?: "vertical" | "horizontal";
    onStepClick?: (index: number) => void;
}
declare const Stepper: React.FC<Props>;
export default Stepper;
